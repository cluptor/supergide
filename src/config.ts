/**
 * Configuration for form URLs.
 * Replace these placeholder URLs with your actual Google Form or Tally Form links!
 */
export const FORM_CONFIG = {
  // Waitlist Google Form or Tally link
  waitlistFormUrl: 'https://tally.so/#waitlist',
  
  // Demo request Google Form, Tally, or Cal/Calendly link
  demoFormUrl: 'https://tally.so/#book-demo',
};

declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: Record<string, unknown>) => void;
      closePopup: (formId: string) => void;
    };
  }
}

/**
 * Opens the target form either via Tally popup (if it's a Tally link)
 * or opens it in a secure new browser tab.
 */
export function openWaitlistForm(prefillEmail?: string) {
  openFormUrl(FORM_CONFIG.waitlistFormUrl, prefillEmail);
}

export function openDemoForm() {
  openFormUrl(FORM_CONFIG.demoFormUrl);
}

function openFormUrl(url: string, email?: string) {
  if (!url || url === '#' || url.startsWith('https://tally.so/#')) {
    // If it's a placeholder or demo tally tag, show a polite alert with instructions or open
    const targetUrl = prompt(
      "Connect your Google Form or Tally Form URL in 'src/config.ts'.\n\nYou can also paste your live form URL below to test it immediately:",
      url.startsWith('http') ? url : 'https://forms.google.com'
    );
    if (targetUrl) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
    return;
  }

  let finalUrl = url;
  if (email && email.trim()) {
    const separator = finalUrl.includes('?') ? '&' : '?';
    // Support common prefill parameters for Tally & Google Forms
    finalUrl = `${finalUrl}${separator}email=${encodeURIComponent(email.trim())}`;
  }

  // If Tally widget is loaded and it's a Tally URL (e.g., tally.so/r/XYZ)
  const tallyMatch = finalUrl.match(/tally\.so\/r\/([a-zA-Z0-9]+)/);
  if (tallyMatch && window.Tally) {
    window.Tally.openPopup(tallyMatch[1], {
      layout: 'modal',
      width: 600,
      hiddenFields: email ? { email } : undefined,
    });
    return;
  }

  window.open(finalUrl, '_blank', 'noopener,noreferrer');
}
