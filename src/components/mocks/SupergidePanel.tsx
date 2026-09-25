import { Check, Mic, Paperclip, Send } from '../Icons';
import { Sparkle } from '../Logo';
import type { Example } from './data';

/** The Supergide panel as it appears inside a customer's product. */
export function SupergidePanel({ example, compact = false }: { example: Example; compact?: boolean }) {
  return (
    <div className={`bg-white rounded-lg border border-line shadow-frame ${compact ? 'w-full' : 'w-[320px] sm:w-[360px]'}`}>
      <div className="flex items-center gap-2 px-4 h-11 border-b border-line">
        <Sparkle className="w-4 h-4 text-blue" />
        <span className="text-[13px] font-semibold text-ink">Supergide</span>
        <span className="ml-auto text-[11px] text-muted">Acme</span>
      </div>

      <div className="px-4 py-3 space-y-3" key={example.request}>
        <div className="flex justify-end">
          <p className="fade-up max-w-[85%] bg-blue text-white text-[13px] leading-snug px-3 py-2 rounded-lg rounded-br-sm">
            {example.request}
          </p>
        </div>

        <ul className="fade-up space-y-1.5">
          {example.steps.map((s, i) => (
            <li key={s} className="flex items-start gap-2 text-[13px] text-body" style={{ animationDelay: `${120 + i * 90}ms` }}>
              <span className="mt-[3px] inline-flex w-4 h-4 rounded-full bg-green/15 text-green items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5" />
              </span>
              {s}
            </li>
          ))}
        </ul>

        <p className="fade-up text-[13px] font-medium text-ink bg-sand rounded-md px-3 py-2" style={{ animationDelay: '420ms' }}>
          {example.result}
        </p>
      </div>

      <div className="px-3 pb-3">
        <div className="flex items-center gap-1.5 h-10 px-2 rounded-md border border-line bg-white">
          <span className="text-[13px] text-muted flex-1 pl-1">Ask for anything…</span>
          <span className="w-7 h-7 inline-flex items-center justify-center rounded text-muted"><Paperclip className="w-4 h-4" /></span>
          <span className="w-7 h-7 inline-flex items-center justify-center rounded text-muted"><Mic className="w-4 h-4" /></span>
          <span className="w-7 h-7 inline-flex items-center justify-center rounded bg-blue text-white"><Send className="w-3.5 h-3.5" /></span>
        </div>
      </div>
    </div>
  );
}
