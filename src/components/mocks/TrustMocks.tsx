import { Check } from '../Icons';
import { Sparkle } from '../Logo';

const panel = 'bg-white rounded-lg border border-line shadow-card text-[12px]';

export function PermissionsMock() {
  const rows: [string, boolean][] = [
    ['Invite members', true],
    ['Change roles', true],
    ['Cancel the contract', false],
  ];
  return (
    <div className={`${panel} p-3`} aria-hidden="true">
      <div className="flex items-center gap-2 pb-2 border-b border-line/70">
        <span className="w-6 h-6 rounded-full bg-blue-soft text-blue-hover text-[10px] font-semibold inline-flex items-center justify-center">SC</span>
        <span className="text-ink font-medium">Sarah Chen</span>
        <span className="ml-auto text-muted">Admin</span>
      </div>
      <ul className="mt-2 space-y-1.5">
        {rows.map(([l, ok]) => (
          <li key={l} className="flex items-center justify-between">
            <span className={ok ? 'text-ink' : 'text-muted'}>{l}</span>
            {ok ? (
              <span className="inline-flex w-4 h-4 rounded-full bg-green/15 text-green items-center justify-center"><Check className="w-2.5 h-2.5" /></span>
            ) : (
              <span className="text-[11px] text-muted">Not allowed</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LogMock() {
  const rows: [string, string, string][] = [
    ['10:42', 'Sarah Chen', 'Added to Growth as Admin'],
    ['10:39', 'Tom Becker', 'Exported September report'],
    ['10:31', 'Priya Nair', 'Upgraded plan to Enterprise'],
  ];
  return (
    <div className={`${panel} p-3`} aria-hidden="true">
      <p className="text-muted mb-2">Activity · today</p>
      <ul className="space-y-1.5">
        {rows.map(([t, who, what]) => (
          <li key={t} className="grid grid-cols-[38px_1fr] gap-2">
            <span className="text-muted tabular-nums">{t}</span>
            <span className="text-ink"><span className="font-medium">{who}</span> <span className="text-body">· {what}</span></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HonestMock() {
  return (
    <div className={`${panel} p-3 space-y-2`} aria-hidden="true">
      <div className="flex justify-end">
        <p className="max-w-[85%] bg-blue text-white px-2.5 py-1.5 rounded-lg rounded-br-sm">Cancel our contract</p>
      </div>
      <div className="flex items-start gap-2">
        <Sparkle className="w-3.5 h-3.5 text-blue mt-1 shrink-0" />
        <p className="text-body bg-sand px-2.5 py-1.5 rounded-lg rounded-tl-sm">
          I can't cancel contracts from here. Your account manager, Priya, can. Want me to message her?
        </p>
      </div>
    </div>
  );
}
