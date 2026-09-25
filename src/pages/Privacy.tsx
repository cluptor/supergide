import { Legal } from './Legal';
import { CONTACT_EMAIL } from '../config';

export function Privacy() {
  return (
    <Legal title="Privacy" updated="September 2026">
      {/* placeholder: replace with reviewed policy */}
      <p>This page describes how Supergide handles information from people who visit this website and from customers who use Supergide inside their products. It is a draft and will be replaced by a reviewed policy before general availability.</p>
      <h2>Website visitors</h2>
      <p>When you leave your email to request early access or send us a message, we use it to reply to you and for nothing else. We don't sell it or share it with advertisers.</p>
      <h2>Customers and their users</h2>
      <p>When Supergide runs inside a customer's product, it sees the requests users make and the actions it takes to complete them. That information belongs to the customer. We use it to run the service and to keep a record of what Supergide did, which the customer can review.</p>
      <h2>Questions</h2>
      <p>Write to <a className="text-blue hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
    </Legal>
  );
}
