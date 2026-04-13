---
Task ID: 5
Agent: Subagent
Task: Add contact form backend API with Prisma

Work Log:
- Read worklog.md (8 previous tasks) and prisma/schema.prisma for project context
- Read src/lib/db.ts to confirm database client import path
- Added ContactMessage model to prisma/schema.prisma with fields: id (cuid), name, email, message, read (boolean default false), createdAt
- Ran `bun run db:push` — schema synced to SQLite, Prisma Client regenerated
- Created src/app/api/contact/route.ts as a Next.js Route Handler with:
  - POST endpoint: Validates name (min 2 chars), email (regex), message (min 10 chars); sanitizes input (trim/lowercase email); creates ContactMessage record; returns 201 with sanitized data
  - GET endpoint: Returns all messages ordered by createdAt desc; includes count and data array
  - Error handling: SyntaxError for malformed JSON (400), validation errors with field-level details (400), generic 500 for unexpected errors
- Ran `bun run lint` — 0 errors, 0 warnings

Stage Summary:
- ContactMessage Prisma model created and synced to SQLite database
- API route at /api/contact with POST (create message) and GET (list all messages) handlers
- Full input validation with field-specific error messages
- Input sanitization (whitespace trim, email lowercase)
- Lint clean, dev server error-free
