"use client";

import { useEffect } from "react";

export default function FontErrorObserver() {
  useEffect(() => {
    // Font loading failure detection and fallback handling
    if (typeof document !== "undefined") {
      if ("fonts" in document) {
        document.fonts.ready
          .then((fontFaceSet) => {
            // Check if any fonts failed to load
            const fontFaces = Array.from(fontFaceSet);
            const hasFailed = fontFaces.some((font) => font.status === "error");
            
            if (hasFailed) {
              console.warn("Some custom fonts failed to load. Falling back to system sans-serif.");
              document.documentElement.classList.add("fonts-failed");
            } else {
              document.documentElement.classList.add("fonts-loaded");
            }
          })
          .catch((err) => {
            console.error("Font loading detection error:", err);
            document.documentElement.classList.add("fonts-failed");
          });
      } else {
        // Fallback for older browsers
        globalThis.document?.documentElement?.classList.add("fonts-loaded");
      }
    }
  }, []);

  return null;
}
