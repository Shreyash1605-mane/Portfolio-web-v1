"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TerminalLine {
  type: "command" | "output" | "cursor";
  text: string;
}

const terminalScript: TerminalLine[] = [
  { type: "command", text: "$ whoami" },
  { type: "output", text: "> shreyash-mane" },
  { type: "command", text: "$ cat skills.txt" },
  { type: "output", text: "> cybersecurity • data-science • iot • ml • web-dev" },
  { type: "command", text: "$ echo $STATUS" },
  { type: "output", text: "> Silver Medalist | Open to Opportunities" },
  { type: "cursor", text: "$ " },
];

const TYPING_SPEED = 40; // ms per character
const LINE_DELAY = 400; // ms delay before each new line starts
const OUTPUT_DELAY = 200; // ms delay for output lines (faster than typing)

function useTypingAnimation() {
  const [lines, setLines] = useState<{ type: string; text: string; displayText: string; isComplete: boolean }[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    let currentLineIndex = 0;
    let currentCharIndex = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const processNextStep = () => {
      if (currentLineIndex >= terminalScript.length) {
        setIsComplete(true);
        return;
      }

      const line = terminalScript[currentLineIndex];

      if (line.type === "cursor") {
        // Cursor line appears instantly
        setLines((prev) => [
          ...prev,
          { type: line.type, text: line.text, displayText: line.text, isComplete: true },
        ]);
        setIsComplete(true);
        return;
      }

      if (line.type === "output") {
        // Output lines appear character by character but faster
        const fullText = line.text;
        if (currentCharIndex === 0) {
          setLines((prev) => [
            ...prev,
            { type: line.type, text: fullText, displayText: "", isComplete: false },
          ]);
        }

        if (currentCharIndex < fullText.length) {
          currentCharIndex++;
          setLines((prev) => {
            const updated = [...prev];
            const lastLine = { ...updated[updated.length - 1] };
            lastLine.displayText = fullText.slice(0, currentCharIndex);
            updated[updated.length - 1] = lastLine;
            return updated;
          });
          timeout = setTimeout(processNextStep, OUTPUT_DELAY);
        } else {
          // Mark line complete and move to next
          setLines((prev) => {
            const updated = [...prev];
            const lastLine = { ...updated[updated.length - 1] };
            lastLine.isComplete = true;
            updated[updated.length - 1] = lastLine;
            return updated;
          });
          currentLineIndex++;
          currentCharIndex = 0;
          timeout = setTimeout(processNextStep, LINE_DELAY);
        }
      } else {
        // Command lines - type character by character
        const fullText = line.text;
        if (currentCharIndex === 0) {
          setLines((prev) => [
            ...prev,
            { type: line.type, text: fullText, displayText: "", isComplete: false },
          ]);
        }

        if (currentCharIndex < fullText.length) {
          currentCharIndex++;
          setLines((prev) => {
            const updated = [...prev];
            const lastLine = { ...updated[updated.length - 1] };
            lastLine.displayText = fullText.slice(0, currentCharIndex);
            updated[updated.length - 1] = lastLine;
            return updated;
          });
          timeout = setTimeout(processNextStep, TYPING_SPEED);
        } else {
          // Mark line complete and move to next
          setLines((prev) => {
            const updated = [...prev];
            const lastLine = { ...updated[updated.length - 1] };
            lastLine.isComplete = true;
            updated[updated.length - 1] = lastLine;
            return updated;
          });
          currentLineIndex++;
          currentCharIndex = 0;
          timeout = setTimeout(processNextStep, LINE_DELAY);
        }
      }
    };

    // Start after a small initial delay
    timeout = setTimeout(processNextStep, 600);

    return () => clearTimeout(timeout);
  }, []);

  return { lines, isComplete };
}

export default function TerminalShowcase() {
  const { lines, isComplete } = useTypingAnimation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="w-full max-w-2xl mx-auto mt-6"
    >
      <div className="relative rounded-xl overflow-hidden shadow-lg shadow-black/10 dark:shadow-black/30 border border-cyber-border dark:border-cyber-border/50 elevated-card">
        {/* Glow effect */}
        <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-neon-blue/10 via-transparent to-neon-blue/5 pointer-events-none" />
        
        {/* Terminal window */}
        <div className="relative bg-[#1A2332] dark:bg-[#0B1120] rounded-xl overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#151E2B] dark:bg-[#0D1526] border-b border-white/[0.06]">
            {/* Traffic light dots */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            {/* Terminal title */}
            <div className="flex-1 text-center">
              <span className="text-xs font-mono text-white/40 select-none">bash — 80×24</span>
            </div>
            <div className="w-[60px]" /> {/* Spacer for balance */}
          </div>

          {/* Terminal body */}
          <div className="p-4 sm:p-5 min-h-[180px] sm:min-h-[200px]">
            {lines.map((line, index) => (
              <div key={index} className="flex items-start">
                <span
                  className={`font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-all ${
                    line.type === "command"
                      ? "text-[#E2E8F0]"
                      : line.type === "output"
                      ? "text-neon-blue/80"
                      : "text-[#E2E8F0]"
                  }`}
                >
                  {line.displayText}
                  {/* Show blinking cursor on incomplete lines or cursor line */}
                  {!line.isComplete || line.type === "cursor" ? (
                    <span className="inline-block w-[7px] h-[14px] sm:h-[16px] bg-[#E2E8F0]/80 ml-[2px] align-middle animate-[blink_1s_step-end_infinite]" />
                  ) : null}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
}
