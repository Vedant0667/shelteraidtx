"use client"

interface AnimatedTextProps {
  text: string
  /** Delay before the word rises in, in seconds. */
  delay?: number
}

/**
 * Word-level rise-in. The whole word animates as one box (no per-letter
 * inline-blocks, which seam and clip with italic serifs). Remounts on `text`.
 */
export function AnimatedText({ text, delay = 0 }: AnimatedTextProps) {
  return (
    <span
      key={text}
      className="word-in"
      style={{ animationDelay: `${delay}s` }}
    >
      {text}
    </span>
  )
}
