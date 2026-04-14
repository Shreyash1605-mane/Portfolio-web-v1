import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ValidationError {
  field: string;
  message: string;
}

function validateContactData(data: {
  name?: string;
  email?: string;
  message?: string;
}): ValidationError[] {
  const errors: ValidationError[] = [];
  const { name, email, message } = data;

  // Validate name: must be at least 2 characters
  if (!name || typeof name !== "string") {
    errors.push({ field: "name", message: "Name is required." });
  } else if (name.trim().length < 2) {
    errors.push({
      field: "name",
      message: "Name must be at least 2 characters long.",
    });
  }

  // Validate email: must be a valid email format
  if (!email || typeof email !== "string") {
    errors.push({ field: "email", message: "Email is required." });
  } else if (!EMAIL_REGEX.test(email.trim())) {
    errors.push({
      field: "email",
      message: "Please provide a valid email address.",
    });
  }

  // Validate message: must be at least 10 characters
  if (!message || typeof message !== "string") {
    errors.push({ field: "message", message: "Message is required." });
  } else if (message.trim().length < 10) {
    errors.push({
      field: "message",
      message: "Message must be at least 10 characters long.",
    });
  }

  return errors;
}

// POST: Create a new contact message
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input fields
    const errors = validateContactData({ name, email, message });

    if (errors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed.",
          details: errors,
        },
        { status: 400 }
      );
    }

    // Sanitize input (trim whitespace)
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedMessage = message.trim();

    // Create contact message in database
    const contactMessage = await db.contactMessage.create({
      data: {
        name: sanitizedName,
        email: sanitizedEmail,
        message: sanitizedMessage,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
        data: {
          id: contactMessage.id,
          name: contactMessage.name,
          email: contactMessage.email,
          createdAt: contactMessage.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    // Handle JSON parse errors (malformed request body)
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request body. Please send valid JSON.",
        },
        { status: 400 }
      );
    }

    console.error("Error creating contact message:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// GET: Retrieve all contact messages (admin purposes)
export async function GET(request: NextRequest) {
  try {
    void request.url;
    const messages = await db.contactMessage.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        count: messages.length,
        data: messages,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
