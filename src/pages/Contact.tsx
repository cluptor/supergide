import { FormEvent, useState } from 'react';
import { CONTACT_EMAIL, FORMS } from '../config';

export function Contact() {
  const [state, setState] = useState({ name: '', email: '', message: '' });

  function submit(e: FormEvent) {
    e.preventDefault();
    if (FORMS.contact && window.Tally) {
      window.Tally.openPopup(FORMS.contact, { layout: 'modal', width: 560, hiddenFields: state });
      return;
    }
    const subject = encodeURIComponent(`Supergide: message from ${state.name || 'the website'}`);
    const body = encodeURIComponent(`${state.message}\n\n— ${state.name}\n${state.email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  const field = 'w-full h-11 px-3 rounded border border-line bg-white text-[15px] text-ink placeholder:text-faint focus:border-blue focus:outline-none';

  return (
    <section className="py-16 sm:py-24">
      <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-2 max-w-4xl">
        <div>
          <h1 className="h-section">Get in touch</h1>
          <p className="lede mt-5">Questions, partnerships, or a walkthrough of Supergide on your product.</p>
          <p className="mt-6 text-[15px] text-body">
            Email us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue underline underline-offset-2">
              {CONTACT_EMAIL}
            </a>{' '}
            or use the form. We reply within a few days.
          </p>
        </div>

        <form onSubmit={submit} className="card p-6 sm:p-8 space-y-4">
          <div>
            <label htmlFor="c-name" className="block text-[13px] font-medium text-ink mb-1.5">Name</label>
            <input id="c-name" className={field} required autoComplete="name" value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} />
          </div>
          <div>
            <label htmlFor="c-email" className="block text-[13px] font-medium text-ink mb-1.5">Work email</label>
            <input id="c-email" type="email" className={field} required autoComplete="email" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} />
          </div>
          <div>
            <label htmlFor="c-message" className="block text-[13px] font-medium text-ink mb-1.5">What can we help with?</label>
            <textarea id="c-message" rows={5} className={`${field} h-auto py-2.5`} required value={state.message} onChange={(e) => setState({ ...state, message: e.target.value })} />
          </div>
          <button type="submit" className="btn-primary w-full">Send</button>
        </form>
      </div>
    </section>
  );
}
