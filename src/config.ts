/**
 * Form wiring. Fill these in once the Tally forms exist.
 * Until then, forms fall back to a mailto: link so visitors never see a dead button.
 */
export const CONTACT_EMAIL = 'hello@supergide.com'; // placeholder

export const FORMS = {
  // Tally form id, e.g. 'w2Xy9z' from https://tally.so/r/w2Xy9z
  waitlist: '',
  contact: '',
};

declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: Record<string, unknown>) => void;
    };
  }
}

export function openWaitlist(email?: string) {
  if (FORMS.waitlist && typeof window !== 'undefined' && window.Tally) {
    window.Tally.openPopup(FORMS.waitlist, {
      layout: 'modal',
      width: 560,
      hiddenFields: email ? { email } : undefined,
    });
    return;
  }
  if (FORMS.waitlist) {
    const url = new URL(`https://tally.so/r/${FORMS.waitlist}`);
    if (email) url.searchParams.set('email', email);
    window.open(url.toString(), '_blank', 'noopener,noreferrer');
    return;
  }
  const subject = encodeURIComponent('Early access to Supergide');
  const body = encodeURIComponent(`Hi,\n\nI'd like early access to Supergide.${email ? `\n\nEmail: ${email}` : ''}\n`);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}
