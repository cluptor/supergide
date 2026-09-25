import { Check } from '../Icons';

/* Small product visuals for the "What it can do" cards. All HTML, tinted to the site palette. */

const panel = 'bg-white rounded-lg border border-line shadow-card text-[12px]';
const Ok = () => (
  <span className="inline-flex w-4 h-4 rounded-full bg-green/15 text-green items-center justify-center shrink-0">
    <Check className="w-2.5 h-2.5" />
  </span>
);

export function TeamMock() {
  return (
    <div className={`${panel} p-3`} aria-hidden="true">
      {[
        ['Priya Nair', 'Owner'],
        ['Tom Becker', 'Member'],
      ].map(([n, r]) => (
        <div key={n} className="flex items-center justify-between py-1.5 border-b border-line/70">
          <span className="text-ink">{n}</span>
          <span className="text-muted">{r}</span>
        </div>
      ))}
      <div className="flex items-center justify-between py-1.5 bg-blue-tint -mx-3 px-3 rounded-b-lg">
        <span className="text-ink font-medium">Sarah Chen</span>
        <span className="inline-flex items-center gap-1.5 text-blue-hover font-medium">Admin <Ok /></span>
      </div>
    </div>
  );
}

export function BillingMock() {
  return (
    <div className={`${panel} p-3`} aria-hidden="true">
      <div className="flex items-center justify-between">
        <span className="text-muted">Plan</span>
        <span className="text-muted line-through">Team</span>
      </div>
      <div className="mt-1.5 flex items-center justify-between">
        <span className="text-ink font-semibold text-[14px]">Enterprise</span>
        <span className="inline-flex items-center gap-1.5 text-ink">10 seats <Ok /></span>
      </div>
      <div className="mt-2.5 h-1.5 rounded-full bg-sand overflow-hidden">
        <div className="h-full w-[70%] bg-blue rounded-full" />
      </div>
      <p className="mt-1.5 text-muted">7 of 10 seats in use</p>
    </div>
  );
}

export function SettingsMock() {
  const rows: [string, boolean][] = [
    ['Require two-factor sign-in', true],
    ['Allow guest links', false],
    ['Weekly digest email', true],
  ];
  return (
    <div className={`${panel} p-3 space-y-2`} aria-hidden="true">
      {rows.map(([l, on]) => (
        <div key={l} className="flex items-center justify-between">
          <span className="text-ink">{l}</span>
          <span className={`relative inline-block w-8 h-[18px] rounded-full transition-colors ${on ? 'bg-blue' : 'bg-line'}`}>
            <span className={`absolute top-[2px] w-[14px] h-[14px] rounded-full bg-white shadow ${on ? 'right-[2px]' : 'left-[2px]'}`} />
          </span>
        </div>
      ))}
    </div>
  );
}

export function ReportsMock() {
  const bars = [38, 52, 44, 66, 58, 80, 72];
  return (
    <div className={`${panel} p-3`} aria-hidden="true">
      <div className="flex items-center justify-between">
        <span className="text-ink font-medium">September usage</span>
        <span className="inline-flex items-center gap-1.5 text-muted">Exported <Ok /></span>
      </div>
      <div className="mt-3 flex items-end gap-1.5 h-12">
        {bars.map((h, i) => (
          <span key={i} className={`flex-1 rounded-sm ${i === bars.length - 1 ? 'bg-blue' : 'bg-blue-soft'}`} style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

export function IntegrationsMock() {
  const tools: [string, string][] = [
    ['Slack', 'Connected'],
    ['Stripe', 'Connected'],
    ['Webhook', 'staging.acme.com/hooks'],
  ];
  return (
    <div className={`${panel} p-3 space-y-2`} aria-hidden="true">
      {tools.map(([t, s]) => (
        <div key={t} className="flex items-center gap-2.5">
          <span className="w-6 h-6 rounded bg-sand border border-line text-[10px] font-semibold text-ink inline-flex items-center justify-center">{t[0]}</span>
          <span className="text-ink font-medium">{t}</span>
          <span className="ml-auto text-muted truncate max-w-[55%]">{s}</span>
          <Ok />
        </div>
      ))}
    </div>
  );
}

export function DataMock() {
  return (
    <div className={`${panel} p-3`} aria-hidden="true">
      <div className="flex items-center gap-2">
        <span className="h-6 px-2 rounded bg-sand border border-line text-[11px] text-ink inline-flex items-center">customers-q3.csv</span>
        <span className="text-muted">→</span>
        <span className="text-ink font-medium">Contacts</span>
      </div>
      <div className="mt-3 h-1.5 rounded-full bg-sand overflow-hidden">
        <div className="h-full w-full bg-green rounded-full" />
      </div>
      <p className="mt-1.5 inline-flex items-center gap-1.5 text-muted">1,240 rows imported, 12 duplicates merged <Ok /></p>
    </div>
  );
}
