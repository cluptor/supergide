import { useEffect, useState } from 'react';

/** Cycles through items. Renders the first item on the server so the HTML is complete. */
export function useRotate(count: number, ms = 4200) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), ms);
    return () => window.clearInterval(id);
  }, [count, ms]);
  return index;
}
