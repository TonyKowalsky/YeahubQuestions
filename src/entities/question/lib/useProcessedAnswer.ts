import { useEffect, useState, type RefObject } from "react";
import hljs from "highlight.js";
import { fixCodeLanguageClasses } from "@/shared/utils";
import type { Question } from "@/entities/question/model";
import DOMPurify from "dompurify";

const useProcessedAnswer = (
  question: Question,
  type: "short" | "long",
  containerRef: RefObject<HTMLDivElement | null>
) => {
  const [processedHtml, setProcessedHtml] = useState("");

  useEffect(() => {
    const html = fixCodeLanguageClasses(
      type === "short" ? question.shortAnswer : question.longAnswer
    );
    const cleanHtml = DOMPurify.sanitize(html);
    setProcessedHtml(cleanHtml);

    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.querySelectorAll("pre code").forEach(block => {
          if (
            block instanceof HTMLElement &&
            !block.classList.contains("hljs")
          ) {
            hljs.highlightElement(block);
          }
        });
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [question, type, containerRef]);

  return processedHtml;
};

export default useProcessedAnswer;
