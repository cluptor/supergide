import { Check } from '../Icons';
import { Sparkle } from '../Logo';

/** A support inbox after Supergide: most rows handled, the rest escalated with context. */
export function InboxMock() {
  const rows: [string, string, 'done' | 'person'][] = [
    ['Add Sarah to the Growth workspace', 'Handled by Supergide', 'done'],
    ['Upgrade to Enterprise, 10 seats', 'Handled by Supergide', 'done'],
    ['Change billing email', 'Handled by Supergide', 'done'],
    ['Cancel our contract', 'Sent to Priya with context', 'person'],
    ['Export September report', 'Handled by Supergide', 'done'],
  ];
  return (
    <div className="frame text-[13px]" aria-hidden="true">
      <div className="h-10 flex items-center px-4 border-b border-line bg-snow">
        <span className="text-ink font-medium">Support inbox</span>
        <span className="ml-auto text-muted text-[12px]">Today</span>
      </div>
      <ul>
        {rows.map(([req, status, kind]) => (
          <li key={req} className="flex items-center gap-3 px-4 py-2.5 border-b border-line/70 last:border-0">
            <span className={`w-5 h-5 rounded-full inline-flex items-center justify-center shrink-0 ${kind === 'done' ? 'bg-green/15 text-green' : 'bg-blue-soft text-blue-hover'}`}>
              {kind === 'done' ? <Check className="w-3 h-3" /> : <Sparkle className="w-3 h-3" />}
            </span>
            <span className="text-ink truncate">{req}</span>
            <span className={`ml-auto shrink-0 text-[12px] ${kind === 'done' ? 'text-muted' : 'text-blue-hover font-medium'}`}>{status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
