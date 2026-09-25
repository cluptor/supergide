import { Mic, Paperclip, Send } from '../Icons';

import { MockCard as Card } from './MockCard';

const composer = 'flex items-center gap-1.5 min-h-[44px] px-2.5 rounded-md border bg-white';
const iconBtn = 'w-7 h-7 inline-flex items-center justify-center rounded shrink-0';

export function InputModes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card eyebrow="Text" title="Type it" text="Write the request the way you'd say it to a colleague.">
        <div className={`${composer} border-blue`}>
          <span className="text-[13px] text-ink flex-1 pl-1 leading-snug line-clamp-2">
            Cancel the trial for the Design workspace<span className="inline-block w-[1.5px] h-[14px] bg-ink align-middle ml-[1px] animate-pulse" />
          </span>
          <span className={`${iconBtn} text-muted md:hidden lg:inline-flex`}><Paperclip className="w-4 h-4" /></span>
          <span className={`${iconBtn} text-muted md:hidden lg:inline-flex`}><Mic className="w-4 h-4" /></span>
          <span className={`${iconBtn} bg-blue text-white`}><Send className="w-3.5 h-3.5" /></span>
        </div>
        <p className="mt-2.5 text-[12px] text-muted px-1">Plain words. No commands to learn.</p>
      </Card>

      <Card eyebrow="Voice" title="Say it" text="Tap the mic and ask out loud. Supergide writes it down as you speak.">
        <div className={`${composer} border-line`}>
          <div className="flex-1 flex items-center gap-[3px] h-7 pl-1">
            {[0.4, 0.8, 1, 0.6, 0.9, 0.5, 0.7, 1, 0.45, 0.8, 0.6, 0.35, 0.7, 0.9, 0.5, 0.75, 0.4].map((h, i) => (
              <span key={i} className="wave-bar w-[3px] rounded-full bg-blue" style={{ height: `${h * 24}px`, animationDelay: `${i * 70}ms` }} />
            ))}
          </div>
          <span className={`${iconBtn} text-muted md:hidden lg:inline-flex`}><Paperclip className="w-4 h-4" /></span>
          <span className={`${iconBtn} bg-blue text-white`}><Mic className="w-4 h-4" /></span>
          <span className={`${iconBtn} bg-sand text-faint`}><Send className="w-3.5 h-3.5" /></span>
        </div>
        <p className="mt-2.5 text-[13px] text-body px-1">
          “Upgrade the team plan to Enterprise and…”<span className="text-muted"> listening</span>
        </p>
      </Card>

      <Card eyebrow="Attachments" title="Show it" text="Drop in a screenshot or a file, and Supergide works from that.">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-2 h-9 pl-1.5 pr-3 rounded-md border border-line bg-snow text-[12px] text-ink">
            <span className="w-6 h-6 rounded bg-white border border-line overflow-hidden relative">
              <span className="absolute left-1 right-1 top-1 h-[2px] bg-line rounded" />
              <span className="absolute left-1 right-1 top-[9px] h-[2px] bg-line rounded" />
              <span className="absolute left-1 right-2 bottom-1 h-[3px] bg-[#f64932]/70 rounded" />
            </span>
            billing-error.png
            <span className="text-faint ml-1">×</span>
          </span>
        </div>
        <div className={`${composer} border-line`}>
          <span className="text-[13px] text-ink flex-1 pl-1">Fix whatever is causing this.</span>
          <span className={`${iconBtn} text-blue-hover md:hidden lg:inline-flex`}><Paperclip className="w-4 h-4" /></span>
          <span className={`${iconBtn} text-muted md:hidden lg:inline-flex`}><Mic className="w-4 h-4" /></span>
          <span className={`${iconBtn} bg-blue text-white`}><Send className="w-3.5 h-3.5" /></span>
        </div>
      </Card>
    </div>
  );
}
