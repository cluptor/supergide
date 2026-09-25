import { useEffect, useRef, useState } from 'react';
import { useRotate } from './mocks/useRotate';

/** The highlighted word in the hero. Cycles through verbs and tints, and the pill resizes to each word, like Notion's hero. */
const WORDS: { word: string; bg: string; dot: string }[] = [
  { word: 'done', bg: '#fbeccc', dot: '#f5b800' },
  { word: 'handled', bg: '#e6f3fe', dot: '#0075de' },
  { word: 'fixed', bg: '#e3f5e8', dot: '#1aae39' },
  { word: 'sorted', bg: '#eee9fb', dot: '#7a5af5' },
];

export function Highlight() {
  const i = useRotate(WORDS.length, 2600);
  const current = WORDS[i];
  const measure = useRef<HTMLSpanElement>(null);
  const [widths, setWidths] = useState<number[] | null>(null);

  useEffect(() => {
    const read = () => {
      const spans = measure.current?.querySelectorAll<HTMLSpanElement>('span');
      if (spans && spans.length) setWidths(Array.from(spans, (s) => s.offsetWidth));
    };
    read();
    // Re-measure once the web font arrives and whenever the viewport changes.
    document.fonts?.ready.then(read);
    window.addEventListener('resize', read);
    return () => window.removeEventListener('resize', read);
  }, []);

  return (
    <span className="hl" style={{ background: current.bg }} aria-live="off">
      <span className="hl-dot" style={{ background: current.dot }} aria-hidden="true" />
      <span className="hl-words" style={widths ? { width: widths[i] } : undefined}>
        {WORDS.map((w, n) => (
          <span key={w.word} className={`hl-word ${n === i ? 'is-on' : ''}`} aria-hidden={n !== i}>
            {w.word}
          </span>
        ))}
      </span>
      {/* Invisible copies used only to measure each word's width. */}
      <span ref={measure} className="hl-measure" aria-hidden="true">
        {WORDS.map((w) => (
          <span key={w.word}>{w.word}</span>
        ))}
      </span>
    </span>
  );
}
