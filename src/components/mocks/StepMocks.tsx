import { Check, Mic, Paperclip, Send } from '../Icons';
import { MockCard } from './MockCard';

const composer = 'flex items-center gap-1.5 min-h-[44px] px-2.5 rounded-md border bg-white';
const iconBtn = 'w-7 h-7 inline-flex items-center justify-center rounded shrink-0';

export function StepAsk() {
  return (
    <MockCard eyebrow="Step 1" title="Ask" text="Type what you want, in your own words." tone="white">
      <div className={`${composer} border-blue`}>
        <span className="text-[13px] text-ink flex-1 pl-1 leading-snug">
          Add Sarah to the Growth workspace with admin permissions<span className="inline-block w-[1.5px] h-[14px] bg-ink align-middle ml-[1px] animate-pulse" />
        </span>
        <span className={`${iconBtn} text-muted`}><Paperclip className="w-4 h-4" /></span>
        <span className={`${iconBtn} text-muted`}><Mic className="w-4 h-4" /></span>
        <span className={`${iconBtn} bg-blue text-white`}><Send className="w-3.5 h-3.5" /></span>
      </div>
      <div className="mt-2.5 flex flex-wrap gap-1.5 px-0.5">
        {['Export September report', 'Upgrade to Enterprise', 'Change billing email'].map((s) => (
          <span key={s} className="h-7 px-2.5 rounded-full border border-line text-[12px] text-body inline-flex items-center">{s}</span>
        ))}
      </div>
    </MockCard>
  );
}

export function StepDo() {
  const steps = ['Found Sarah Chen in your directory', 'Added her to Growth', 'Set her role to Admin'];
  return (
    <MockCard eyebrow="Step 2" title="Supergide does it" text="It makes the change inside your product, using the same permissions the user already has." tone="white">
      <div className="flex justify-end mb-3">
        <p className="max-w-[90%] bg-blue text-white text-[12px] leading-snug px-2.5 py-1.5 rounded-lg rounded-br-sm">
          Add Sarah to the Growth workspace with admin permissions
        </p>
      </div>
      <ul className="space-y-2 px-0.5">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2.5 text-[13px] text-body">
            <span className={`inline-flex w-4.5 h-4.5 w-[18px] h-[18px] rounded-full items-center justify-center shrink-0 ${i < 2 ? 'bg-green/15 text-green' : 'border-2 border-blue border-t-transparent animate-spin'}`}>
              {i < 2 && <Check className="w-2.5 h-2.5" />}
            </span>
            {s}
          </li>
        ))}
      </ul>
    </MockCard>
  );
}

export function StepProof() {
  return (
    <MockCard eyebrow="Step 3" title="See proof" text="Supergide shows exactly what changed. If it can’t do something, it says so and points the user to who can." tone="white">
      <div className="flex items-start gap-2.5 bg-sand rounded-md px-3 py-2.5">
        <span className="mt-0.5 inline-flex w-[18px] h-[18px] rounded-full bg-green/15 text-green items-center justify-center shrink-0"><Check className="w-2.5 h-2.5" /></span>
        <div>
          <p className="text-[13px] font-medium text-ink">Done. Sarah can sign in to Growth now.</p>
          <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[12px]">
            <dt className="text-muted">Member</dt><dd className="text-body">Sarah Chen</dd>
            <dt className="text-muted">Workspace</dt><dd className="text-body">Growth</dd>
            <dt className="text-muted">Role</dt><dd className="text-body">Admin</dd>
          </dl>
        </div>
      </div>
      <div className="mt-2.5 flex gap-1.5 px-0.5">
        <span className="h-7 px-2.5 rounded-full border border-line text-[12px] text-body inline-flex items-center">Undo</span>
        <span className="h-7 px-2.5 rounded-full border border-line text-[12px] text-body inline-flex items-center">Open Team settings</span>
      </div>
    </MockCard>
  );
}
