import { Legal } from './Legal';
import { CONTACT_EMAIL } from '../config';

export function Terms() {
  return (
    <Legal title="Terms" updated="September 2026">
      {/* placeholder: replace with reviewed terms */}
      <p>These terms cover the use of this website and early access to Supergide. They are a draft and will be replaced by reviewed terms before general availability.</p>
      <h2>Early access</h2>
      <p>Early access is offered to a limited number of teams under an agreement we sign with each one. That agreement takes precedence over anything on this page.</p>
      <h2>This website</h2>
      <p>The content on this site is provided as is. We may change it at any time.</p>
      <h2>Questions</h2>
      <p>Write to <a className="text-blue hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
    </Legal>
  );
}
