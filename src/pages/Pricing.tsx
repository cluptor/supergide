import { Link } from 'react-router-dom';
import { Check } from '../components/Icons';
import { openWaitlist } from '../config';

const included = [
  'Supergide inside your product, in your colors',
  'Text, voice, and attachments',
  'A log of every request and action',
  'Setup with our team',
  'Email support',
];

export function Pricing() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-site">
        <div className="max-w-2xl">
          <h1 className="h-display">Pricing</h1>
          <p className="lede mt-5">
            Supergide is in early access. Pricing depends on your product and how many requests it handles, so we walk through it with you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 max-w-4xl">
          <div className="card p-7 sm:p-8">
            <h2 className="h-card">Early access</h2>
            <p className="mt-1.5 text-[15px] text-body">For teams who want to try Supergide on their product now.</p>
            <ul className="mt-6 space-y-2.5">
              {included.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-[15px] text-body">
                  <span className="mt-[3px] inline-flex w-4 h-4 rounded-full bg-green/15 text-green items-center justify-center shrink-0"><Check className="w-2.5 h-2.5" /></span>
                  {i}
                </li>
              ))}
            </ul>
            <button type="button" className="btn-primary mt-8" onClick={() => openWaitlist()}>
              Get early access
            </button>
          </div>
          <div className="rounded-xl border border-line p-7 sm:p-8">
            <h2 className="h-card">Questions first?</h2>
            <p className="mt-1.5 text-[15px] text-body">
              Tell us about your product and we'll come back with a plan and a price. {/* placeholder: real tiers once pricing is set */}
            </p>
            <Link to="/contact" className="btn-secondary mt-8">
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
