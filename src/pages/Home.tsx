import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { EmailForm } from '../components/EmailForm';
import { ProductFrame } from '../components/mocks/ProductFrame';
import { StepAsk, StepDo, StepProof } from '../components/mocks/StepMocks';
import { Highlight } from '../components/Highlight';
import { InputModes } from '../components/mocks/InputModes';
import { BillingMock, DataMock, IntegrationsMock, ReportsMock, SettingsMock, TeamMock } from '../components/mocks/FeatureMocks';
import { HonestMock, LogMock, PermissionsMock } from '../components/mocks/TrustMocks';
import { InboxMock } from '../components/mocks/InboxMock';
import { Arrow, Book, Clock, Ticket } from '../components/Icons';
import { openWaitlist } from '../config';

const tasks = [
  { title: 'Team and access', text: 'Invite people, remove them, change roles.', mock: <TeamMock /> },
  { title: 'Billing', text: 'Upgrade plans, add seats, update payment details.', mock: <BillingMock /> },
  { title: 'Settings', text: 'Rename workspaces, set defaults, turn features on or off.', mock: <SettingsMock /> },
  { title: 'Reports', text: 'Export, schedule, and share.', mock: <ReportsMock /> },
  { title: 'Integrations', text: 'Connect tools, update webhook URLs, rotate keys.', mock: <IntegrationsMock /> },
  { title: 'Data', text: 'Import, export, and clean up.', mock: <DataMock /> },
];

const trust = [
  { title: 'Same permissions as the user', text: 'Supergide never does anything the person asking couldn’t do themselves.', mock: <PermissionsMock /> },
  { title: 'Every action is recorded', text: 'Your team can see what was requested, what was done, and when.', mock: <LogMock /> },
  { title: 'Honest when it can’t', text: 'If a task is out of bounds, Supergide says so instead of guessing.', mock: <HonestMock /> },
];

const teams = [
  { icon: Ticket, title: 'Fewer tickets', text: 'Requests that used to become tickets get handled on the spot.' },
  { icon: Clock, title: 'Faster resolutions', text: 'The ones that still need a person arrive with the context already collected.' },
  { icon: Book, title: 'Nothing new to write', text: 'No help center to maintain for the tasks Supergide handles.' },
];

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 sm:pt-24 pb-10 sm:pb-16">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h-display">
              Support that gets{' '}
              <span className="whitespace-nowrap">
                it <Highlight />.
              </span>
            </h1>
            <p className="lede mt-6 max-w-xl mx-auto">
              Your users ask for what they need. Supergide does it for them, right inside your product.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2">
              <button type="button" className="btn-primary w-full sm:w-auto" onClick={() => openWaitlist()}>
                Get early access
              </button>
              <a href="#how-it-works" className="btn-secondary w-full sm:w-auto">
                See how it works
              </a>
            </div>
          </div>

          <div id="product" className="mt-14 sm:mt-20 max-w-5xl mx-auto scroll-mt-20">
            <ProductFrame />
          </div>
        </div>
      </section>

      {/* Problem */}
      <Section
        title="Help articles explain. Chatbots explain. Nobody does the work."
        lede="When someone is stuck in your product, a link to the docs is one more thing to read. A chatbot answer is one more thing to try. Supergide skips both and completes the task."
      />

      {/* How it works */}
      <Section id="how-it-works" tone="sand" eyebrow="How it works" title="Three steps. No clicking around.">
        <div className="grid gap-4 md:grid-cols-3">
          <StepAsk />
          <StepDo />
          <StepProof />
        </div>
      </Section>

      {/* Input modes */}
      <Section eyebrow="Ask however you want" title="Type it, say it, or show it.">
        <InputModes />
      </Section>

      {/* What it can do */}
      <Section id="what-it-can-do" tone="sand" eyebrow="What it can do" title="Everyday tasks, done in seconds.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((t) => (
            <div key={t.title} className="bg-white rounded-xl border border-line p-6 flex flex-col">
              <h3 className="h-card">{t.title}</h3>
              <p className="mt-1.5 text-[15px] text-body leading-relaxed">{t.text}</p>
              <div className="mt-6 pt-1 mt-auto">{t.mock}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Trust */}
      <Section id="trust" eyebrow="Trust" title="Only what it’s allowed to do.">
        <div className="grid gap-4 md:grid-cols-3">
          {trust.map((t) => (
            <div key={t.title} className="card p-6 sm:p-7 flex flex-col">
              <h3 className="h-card">{t.title}</h3>
              <p className="mt-1.5 text-[15px] text-body leading-relaxed">{t.text}</p>
              <div className="mt-6 mt-auto pt-1">{t.mock}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* For support teams */}
      <Section tone="sand" eyebrow="For support teams" title="Fewer tickets. Faster resolutions. Nothing new to write.">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-[1.25fr_1fr] items-center">
          <InboxMock />
          <ul className="space-y-6">
            {teams.map((t) => (
              <li key={t.title} className="flex gap-4">
                <span className="w-10 h-10 rounded-md bg-white border border-line text-ink inline-flex items-center justify-center shrink-0">
                  <t.icon className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold text-ink">{t.title}</h3>
                  <p className="mt-1 text-[15px] text-body leading-relaxed">{t.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Install */}
      <section className="py-16 sm:py-24">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="h-section">Set up in minutes.</h2>
            <p className="lede mt-4">One line to install. Supergide appears inside your product, in your colors.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-blue hover:underline">
              Talk to us about setup <Arrow className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-sand py-16 sm:py-24">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <h2 className="h-section">See Supergide in your product.</h2>
            <p className="lede mt-4">
              We're onboarding a small number of teams right now. Leave your email and we'll reach out within a few days to set up a walkthrough.
            </p>
            <div className="mt-8 w-full flex justify-center">
              <EmailForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
