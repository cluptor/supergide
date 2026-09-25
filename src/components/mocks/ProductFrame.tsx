import { EXAMPLES } from './data';
import { useRotate } from './useRotate';
import { SupergidePanel } from './SupergidePanel';

const rows = [
  ['Priya Nair', 'Owner', 'Active'],
  ['Tom Becker', 'Member', 'Active'],
  ['Lena Okafor', 'Member', 'Active'],
  ['Marcus Lee', 'Viewer', 'Invited'],
];

/** A customer's product with the Supergide panel open. Pure HTML so it stays crisp at any size. */
export function ProductFrame() {
  const i = useRotate(EXAMPLES.length);
  const example = EXAMPLES[i];
  const showSarah = i === 0;

  return (
    <div className="frame relative select-none" aria-hidden="true">
      {/* window chrome */}
      <div className="h-10 flex items-center gap-3 px-4 border-b border-line bg-snow">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-line" />
          <span className="w-2.5 h-2.5 rounded-full bg-line" />
          <span className="w-2.5 h-2.5 rounded-full bg-line" />
        </div>
        <div className="mx-auto h-6 px-3 rounded bg-white border border-line text-[11px] text-muted flex items-center min-w-[220px]">
          app.acme.com/settings/team
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] min-h-[420px] sm:min-h-[520px]">
        {/* sidebar */}
        <aside className="hidden sm:block border-r border-line bg-snow p-3 text-[12px]">
          <div className="flex items-center gap-2 px-2 py-1.5 font-semibold text-ink">
            <span className="w-5 h-5 rounded bg-ink text-white text-[10px] inline-flex items-center justify-center">A</span>
            Acme
          </div>
          <ul className="mt-3 space-y-0.5 text-body">
            {['Home', 'Projects', 'Reports', 'Billing'].map((l) => (
              <li key={l} className="px-2 py-1.5 rounded">{l}</li>
            ))}
            <li className="px-2 py-1.5 rounded bg-white border border-line text-ink font-medium">Team</li>
            <li className="px-2 py-1.5 rounded">Integrations</li>
            <li className="px-2 py-1.5 rounded">Settings</li>
          </ul>
        </aside>

        {/* main */}
        <div className="p-5 sm:p-7 relative">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[18px] font-semibold text-ink">Team members</h3>
              <p className="text-[12px] text-muted mt-0.5">Growth workspace · {showSarah ? 5 : 4} people</p>
            </div>
            <span className="h-8 px-3 rounded bg-ink text-white text-[12px] inline-flex items-center">Invite</span>
          </div>

          <table className="mt-5 w-full text-[13px]">
            <thead>
              <tr className="text-left text-muted text-[11px]">
                <th className="font-medium pb-2">Name</th>
                <th className="font-medium pb-2">Role</th>
                <th className="font-medium pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]} className="border-t border-line/70">
                  <td className="py-2.5 text-ink">{r[0]}</td>
                  <td className="py-2.5 text-body">{r[1]}</td>
                  <td className="py-2.5 text-body">{r[2]}</td>
                </tr>
              ))}
              {showSarah && (
                <tr className="border-t border-line/70 bg-blue-tint fade-up">
                  <td className="py-2.5 text-ink font-medium">Sarah Chen</td>
                  <td className="py-2.5 text-ink font-medium">Admin</td>
                  <td className="py-2.5 text-blue-hover font-medium">Just added</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="mt-6 sm:hidden">
            <SupergidePanel example={example} compact />
          </div>
        </div>
      </div>

      <div className="hidden sm:block absolute right-6 bottom-6">
        <SupergidePanel example={example} />
      </div>
    </div>
  );
}
