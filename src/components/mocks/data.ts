export interface Example {
  request: string;
  steps: string[];
  result: string;
}

export const EXAMPLES: Example[] = [
  {
    request: 'Add Sarah to the Growth workspace with admin permissions',
    steps: ['Found Sarah Chen in your directory', 'Added her to Growth', 'Set her role to Admin'],
    result: 'Done. Sarah can sign in to Growth now.',
  },
  {
    request: 'Upgrade the team plan to Enterprise and assign 10 seats',
    steps: ['Switched the plan to Enterprise', 'Set the seat count to 10', 'Kept the current billing cycle'],
    result: 'Done. The new plan starts today and the invoice is in Billing.',
  },
  {
    request: 'Export the monthly report and raise the billing threshold',
    steps: ['Exported September as a CSV', 'Raised the threshold to $5,000', 'Saved the change to Billing'],
    result: 'Done. The export is ready and the threshold is updated.',
  },
  {
    request: 'Change the billing email to finance@acme.com',
    steps: ['Opened billing settings', 'Replaced the contact email', 'Sent a confirmation to the new address'],
    result: 'Done. Invoices now go to finance@acme.com.',
  },
  {
    request: 'Move the Design team’s projects into the new workspace',
    steps: ['Found 12 projects owned by Design', 'Moved them to Design 2026', 'Kept every member’s access'],
    result: 'Done. All 12 projects are in Design 2026.',
  },
  {
    request: 'Set up staging API keys and point the webhook at our test URL',
    steps: ['Created a staging key', 'Set the webhook to staging.acme.com/hooks', 'Sent a test event'],
    result: 'Done. The test event was received.',
  },
];
