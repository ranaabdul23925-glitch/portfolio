import { type FormEvent, type ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleArrowOutUpRight,
  Mail,
  Menu,
  MessageCircle,
  Plus,
  Send,
  Sparkles,
  Target,
  X,
  Zap,
} from 'lucide-react';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import profileImage from '@assets/ChatGPT_Image_Sep_21,_2026,_07_09_32_AM_1790000297343.png';

const queryClient = new QueryClient();

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [portfolioFilter, setPortfolioFilter] = useState('All');

  useEffect(() => {
    document.title = 'Digital Services & Growth Partner | Pakistan — Abdullah Rana';
    const description = 'Strategic digital marketing, web development, e-commerce and automation for ambitious businesses in Pakistan and worldwide.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
    const ogTags = [
      ['og:title', document.title],
      ['og:description', description],
      ['og:type', 'website'],
    ];
    ogTags.forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
    document.querySelectorAll('.hero .reveal').forEach((node) => node.classList.add('is-visible'));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <button className="brand" onClick={() => scrollTo('top')} data-testid="button-brand-home" aria-label="Back to top">
            <span className="brand-mark">/</span>
            <span>Abdullah Rana</span>
          </button>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
            <a href="#about" onClick={() => setMenuOpen(false)} data-testid="link-nav-about">About</a>
            <a href="#services" onClick={() => setMenuOpen(false)} data-testid="link-nav-services">Services</a>
            <a href="#meta-ads" onClick={() => setMenuOpen(false)} data-testid="link-nav-meta">Meta Ads</a>
            <a href="#process" onClick={() => setMenuOpen(false)} data-testid="link-nav-process">Process</a>
            <a href="#work" onClick={() => setMenuOpen(false)} data-testid="link-nav-work">Portfolio</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} data-testid="link-nav-faq">FAQ</a>
          </nav>
          <button className="header-cta" onClick={() => scrollTo('contact')} data-testid="button-header-contact">Start a conversation <ArrowRight size={14} /></button>
          <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-inner">
            <div>
              <div className="hero-kicker eyebrow reveal"><span className="pulse" /> Independent digital partner · Pakistan / worldwide</div>
              <h1 className="display brief-headline reveal delay-1">Grow your business with <em>digital marketing, Meta Ads &amp; professional websites.</em></h1>
              <p className="hero-copy reveal delay-2">I help businesses build a stronger online presence through strategic social media management, high-performance Meta Ads and modern websites.</p>
              <div className="hero-actions reveal delay-3">
                <button className="button-primary" onClick={() => scrollTo('contact')} data-testid="button-hero-start">Get a free consultation <ArrowRight size={15} /></button>
                <button className="button-secondary" onClick={() => scrollTo('services')} data-testid="button-hero-services">View my services <ArrowDownRight size={15} /></button>
              </div>
              <div className="hero-note reveal delay-3"><span /> Meta Ads · Social media · Web development · Digital marketing · AI automation</div>
            </div>
            <div className="hero-visual reveal delay-2" aria-label="Digital strategy visual">
              <div className="hero-orb" /><div className="hero-orb two" />
              <div className="visual-card">
                <div className="visual-top"><span className="mono">Field notes / 001</span><span className="mono">Available for select briefs</span></div>
                <div className="visual-number">01</div>
                <div className="visual-title">Clarity before clicks.</div>
                <div className="visual-bottom"><small>Strategy that knows what the work is for.</small><CircleArrowOutUpRight className="visual-arrow" size={25} /></div>
              </div>
            </div>
          </div>
        </section>

        <div className="signal-strip">
          <div className="container signal-track">
            <div className="signal-item"><Zap size={15} /> Strategy with a point of view</div>
            <div className="signal-item"><Target size={15} /> Work built around outcomes</div>
            <div className="signal-item"><Sparkles size={15} /> Local context, global standard</div>
          </div>
        </div>

        <section className="section about-section" id="about">
          <div className="container about-layout">
            <div className="about-portrait reveal">
              <div className="portrait-grid" />
              <img className="profile-image" src={profileImage} alt="Abdullah Rana, digital marketing and web development specialist" />
              <span className="portrait-caption mono">Abdullah Rana / Digital partner</span>
            </div>
            <div className="section-heading reveal delay-1">
              <div className="eyebrow">01 / About me</div>
              <h2 className="display">Helping businesses grow online.</h2>
              <p>I work with businesses that want a clearer online presence and a more useful path from attention to action. That can mean managing your social channels, building the right website, improving your advertising or connecting the systems behind the scenes.</p>
              <p className="about-note">The work is practical, collaborative and shaped around your goals — not inflated promises or a one-size-fits-all package.</p>
              <button className="text-link" onClick={() => scrollTo('contact')} data-testid="button-about-contact">Let’s talk about your goals <ArrowRight size={15} /></button>
            </div>
          </div>
        </section>

        <section className="section light-section" id="services">
          <div className="container">
            <div className="section-heading reveal">
              <div className="eyebrow">02 / What I do</div>
              <h2 className="display">The right digital pieces, working as one.</h2>
              <p>No menu of disconnected deliverables. We identify the constraint, choose the right lever, then build the system to support it.</p>
            </div>
            <div className="services-layout">
              <div className="service-list reveal delay-1">
                {[
                  ['01', 'Social media management', 'A consistent, considered presence that sounds like your business and gives people a reason to stay.'],
                  ['02', 'Meta Ads management', 'Campaign structure, creative direction and ongoing optimisation built around a clear business goal.'],
                  ['03', 'Web development', 'Fast, purposeful websites that make your offer easier to understand and easier to choose.'],
                  ['04', 'E-commerce & landing pages', 'Focused buying journeys for launches, products, campaigns and the moments that need to convert.'],
                  ['05', 'Digital marketing', 'A practical growth plan that connects channels, content and conversion instead of chasing every trend.'],
                  ['06', 'AI automation', 'Thoughtful automations for repetitive work, faster response times and more room for the work that matters.'],
                ].map(([number, title, copy]) => (
                  <div className="service-row" key={number} data-testid={`service-row-${number}`}>
                    <div className="service-index">{number}</div>
                    <div><h3>{title}</h3><p>{copy}</p></div>
                    <button className="service-link" onClick={() => scrollTo('contact')} data-testid={`button-service-${number}`}>Learn more <ArrowRight size={14} /></button>
                  </div>
                ))}
              </div>
              <aside className="service-aside reveal delay-2">
                <div className="eyebrow">A useful distinction</div>
                <h3>Activity is not the same as progress.</h3>
                <p>The best digital work makes the next decision obvious — for you, your team and the people you want to reach.</p>
                <div className="aside-foot mono">Signal over noise</div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section meta-section dark-section" id="meta-ads">
          <div className="container campaign-layout">
            <div className="section-heading reveal">
              <div className="eyebrow">03 / Meta Ads</div>
              <h2 className="display">Meta Ads that turn attention into customers.</h2>
              <p>I create, manage and optimise Facebook and Instagram campaigns around your business goals, audience targeting and real campaign performance.</p>
              <button className="button-primary" onClick={() => scrollTo('contact')} data-testid="button-meta-contact">Discuss your Meta Ads <ArrowRight size={15} /></button>
            </div>
            <div className="campaign-panel reveal delay-1">
              {[
                ['01', 'Research', 'Audience and offer context'],
                ['02', 'Strategy', 'Goal, funnel and creative direction'],
                ['03', 'Campaign setup', 'Structure, targeting and tracking'],
                ['04', 'Launch', 'Careful rollout with clear checks'],
                ['05', 'Optimisation', 'Learning from the right signals'],
                ['06', 'Reporting', 'Useful decisions, not vanity metrics'],
              ].map(([num, title, copy]) => (
                <div className="campaign-step" key={num}>
                  <span className="campaign-num mono">{num}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                  <ArrowUpRight size={16} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section social-section">
          <div className="container channel-layout">
            <div className="section-heading reveal">
              <div className="eyebrow">04 / Social media</div>
              <h2 className="display">Your social media, managed professionally.</h2>
              <p>Build a consistent presence that gives your audience a reason to remember you, trust you and take the next step.</p>
              <button className="text-link" onClick={() => scrollTo('contact')} data-testid="button-social-contact">Manage my social media <ArrowRight size={15} /></button>
            </div>
            <div className="channel-list reveal delay-1">
              {['Content strategy', 'Page management', 'Instagram management', 'Facebook management', 'Content scheduling', 'Community engagement', 'Growth strategy'].map((item, index) => (
                <div className="channel-item" key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong><Check size={16} /></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section web-section dark-section">
          <div className="container web-layout">
            <div className="section-heading reveal">
              <div className="eyebrow">05 / Web development</div>
              <h2 className="display">Modern websites built for your business.</h2>
              <p>From a focused landing page to a complete e-commerce experience, every build is designed to be understood, trusted and used on any screen.</p>
              <button className="button-primary" onClick={() => scrollTo('contact')} data-testid="button-web-contact">Build my website <ArrowRight size={15} /></button>
            </div>
            <div className="web-specs reveal delay-1">
              {['Business websites', 'Portfolio websites', 'E-commerce stores', 'Landing pages', 'Service websites'].map((item) => <div className="web-type" key={item}><span>{item}</span><ArrowUpRight size={17} /></div>)}
              <div className="web-feature-grid">
                {['Responsive design', 'Modern UI/UX', 'Fast performance', 'Mobile friendly', 'SEO-friendly structure', 'WhatsApp integration', 'Contact forms'].map((item) => <span key={item}><Check size={14} /> {item}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section dark-section" id="process">
          <div className="container process-layout">
            <div className="section-heading reveal">
              <div className="eyebrow">06 / How it works</div>
              <h2 className="display">A calm process for ambitious work.</h2>
              <p>Clear thinking up front. Focused delivery in the middle. A digital asset you can understand and build on after launch.</p>
            </div>
            <div className="process-list reveal delay-1">
              {[
                ['01', 'Discovery', 'Understand your business, audience and goals.'],
                ['02', 'Strategy', 'Create a suitable marketing or development strategy.'],
                ['03', 'Build / launch', 'Develop the website or launch the marketing campaign.'],
                ['04', 'Optimise', 'Analyse performance and continuously improve.'],
                ['05', 'Scale', 'Expand what works and grow the business with confidence.'],
              ].map(([num, title, copy]) => (
                <div className="process-step" key={num} data-testid={`process-step-${num}`}>
                  <div className="step-num">{num}</div><div><h3>{title}</h3><p>{copy}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="container capabilities reveal delay-2">
            {[
              ['A', 'Positioning', 'Find the sharpest way to say what you do and who it is for.'],
              ['B', 'Content systems', 'Build a repeatable point of view instead of posting into the void.'],
              ['C', 'Conversion paths', 'Give attention somewhere useful to go.'],
              ['D', 'Operational lift', 'Use the right tools to remove friction behind the scenes.'],
              ['E', 'Honest iteration', 'Make decisions from evidence, not noise.'],
            ].map(([num, title, copy]) => (
              <div className="capability" key={num}><span className="capability-number">{num}</span><h3>{title}</h3><p>{copy}</p><ArrowUpRight className="capability-arrow" size={18} /></div>
            ))}
          </div>
        </section>

        <section className="section portfolio-section" id="work">
          <div className="container">
            <div className="section-heading reveal">
              <div className="eyebrow">07 / Selected work</div>
              <h2 className="display">A space for work with a reason behind it.</h2>
              <p>Portfolio case studies are being added here. This section is ready for real projects, context and outcomes — never invented proof.</p>
            </div>
            <div className="portfolio-filters reveal">
              {['All', 'Web Development', 'Meta Ads', 'Social Media', 'Digital Marketing'].map((filter) => (
                <button className={portfolioFilter === filter ? 'active' : ''} onClick={() => setPortfolioFilter(filter)} key={filter} data-testid={`button-portfolio-filter-${filter.toLowerCase().replaceAll(' ', '-')}`}>{filter}</button>
              ))}
            </div>
            <div className="portfolio-grid">
              {[
                ['Portfolio placeholder', 'Case study / paid social', 'Your campaign story goes here.', 'A', 'Meta Ads'],
                ['Portfolio placeholder', 'Case study / web build', 'Your web project story goes here.', 'B', 'Web Development'],
                ['Portfolio placeholder', 'Case study / content system', 'Your content system story goes here.', 'C', 'Social Media'],
                ['Portfolio placeholder', 'Case study / automation', 'Your automation story goes here.', 'D', 'Digital Marketing'],
              ].filter(([, , , , category]) => portfolioFilter === 'All' || category === portfolioFilter).map(([tag, title, copy, symbol], index) => (
                <article className={`portfolio-card reveal delay-${(index % 3) + 1}`} key={symbol} data-testid={`portfolio-card-${symbol}`}>
                  <span className="card-tag">{tag}</span><span className="portfolio-placeholder">Details to be added</span><div className="portfolio-symbol">{symbol}</div>
                  <h3>{title}</h3><p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section light-section">
          <div className="container why-grid">
            <div className="why-copy">
              <div className="section-heading reveal">
                <div className="eyebrow">08 / Why work with me</div>
                <h2 className="display">Senior thinking. Close collaboration.</h2>
                <p>You do not need another layer between your business and the work. You need someone who can see the whole picture, own the details and tell you what matters next.</p>
              </div>
              <div className="principles reveal delay-1">
                {[
                  ['Context before tactics', 'The channel is never the strategy.'],
                  ['Built to be understood', 'You should know what is happening and why.'],
                  ['Small team energy', 'Direct communication, quick decisions, no theatre.'],
                  ['Long-term usefulness', 'The work should keep earning its place after launch.'],
                  ['Professional service', 'Careful work, clear scope and dependable follow-through.'],
                  ['Modern technology', 'The right tools used for a useful reason.'],
                  ['Mobile-first thinking', 'Solutions that work where your customers are.'],
                ].map(([title, copy]) => <div className="principle" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
              </div>
            </div>
            <aside className="why-panel reveal delay-2">
              <span className="panel-micro mono">The working principle</span>
              <h3>Make the complex feel actionable.</h3>
              <div className="panel-bottom"><p>Good digital work gives a business momentum it can actually maintain.</p><ArrowDownRight size={37} /></div>
            </aside>
          </div>
        </section>

        <section className="section pricing-section">
          <div className="container">
            <div className="section-heading reveal">
              <div className="eyebrow">09 / Services shaped around you</div>
              <h2 className="display">No forced packages. Just the right starting point.</h2>
              <p>Every business starts from a different place. Request a quote and we’ll shape the scope around your goals, timeline and current setup.</p>
            </div>
            <div className="pricing-grid reveal delay-1">
              {[
                ['01', 'Meta Ads management', 'Campaign setup, targeting, creative direction, optimisation and reporting.'],
                ['02', 'Social media management', 'Content planning, page management, scheduling, engagement and growth strategy.'],
                ['03', 'Website development', 'Business websites, e-commerce stores, landing pages and modern UI/UX.'],
              ].map(([num, title, copy]) => (
                <article className="pricing-card" key={title}><span className="mono">{num}</span><h3>{title}</h3><p>{copy}</p><button className="text-link" onClick={() => scrollTo('contact')} data-testid={`button-quote-${num}`}>Request a quote <ArrowRight size={15} /></button></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonial-band">
          <div className="container">
            <div className="section-heading reveal">
              <div className="eyebrow">10 / Client perspective</div>
              <h2 className="display">Proof belongs to the people who lived the work.</h2>
              <p>Testimonials will be added once approved by real clients. No anonymous praise, no made-up quotes.</p>
            </div>
            <div className="quote-grid reveal delay-1">
              <article className="quote-card"><span className="mono eyebrow">Testimonial placeholder / 01</span><h3>“A considered client quote will live here — with the context to make it useful.”</h3><p>Client name · Role · Company to be added</p></article>
              <article className="quote-card small"><span className="mono eyebrow">Testimonial placeholder / 02</span><h3>“Specific outcomes and a real point of view belong here.”</h3><p>Client details to be added</p></article>
            </div>
          </div>
        </section>

        <section className="section faq-contact" id="faq">
          <div className="container faq-layout">
            <div className="section-heading reveal">
              <div className="eyebrow">11 / Common questions</div>
              <h2 className="display">Before we get into the details.</h2>
              <p>It is useful to know how I think about fit, scope and the first conversation.</p>
            </div>
            <div className="faq-list reveal delay-1">
              {[
                ['Do you work with clients outside Pakistan?', 'Yes. I work with local and international clients, with communication and delivery structured around the project and time zones.'],
                ['What services do you provide?', 'I provide social media management, Meta Ads management, web development, e-commerce and landing pages, digital marketing and AI automation.'],
                ['Do you manage Facebook and Instagram ads?', 'Yes. Meta Ads support can include campaign setup, audience research, lead generation, sales campaigns, retargeting and ongoing optimisation.'],
                ['Can you build an e-commerce website?', 'Yes. We can scope a focused store around your products, customer journey, content and the tools your business already uses.'],
                ['Do you manage social media pages?', 'Yes. Support can include content planning, scheduling, page management, audience engagement and a growth strategy.'],
                ['Can you integrate WhatsApp into my website?', 'Yes. A WhatsApp CTA or enquiry path can be included where it makes sense for your customers.'],
                ['Can I ask for just one service?', 'Of course. A focused engagement can be the right answer. I will still look at the wider context so the deliverable does not sit in isolation.'],
                ['How can I get started?', 'Send a short note through the form below or use WhatsApp. A rough brief is enough for the first conversation.'],
                ['Do you offer fixed packages or pricing?', 'Project scope is shaped around the brief, not a public rate card. Share what you are trying to achieve and I will suggest a sensible next step before any commitment.'],
                ['What happens after I send an enquiry?', 'I will review the context you share and respond with a useful first direction or a few questions. The first conversation is about fit, not pressure.'],
                ['Can you work with an existing team?', 'Yes. I can plug into an internal team, collaborate with other specialists or own a defined workstream from strategy through delivery.'],
              ].map(([question, answer], index) => (
                <div className="faq-item" key={question}>
                  <button className={`faq-trigger ${openFaq === index ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} data-testid={`button-faq-${index}`}>
                    <span>{question}</span><Plus size={18} />
                  </button>
                  {openFaq === index && <div className="faq-answer" data-testid={`text-faq-answer-${index}`}>{answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div>
              <div className="section-heading reveal">
                <div className="eyebrow">12 / Start a conversation</div>
                <h2 className="display">Bring the messy version.</h2>
                <p>A rough brief is enough. Tell me what is happening, what you have tried and what you want to change. I will help you find the useful next step.</p>
              </div>
              <div className="contact-details reveal delay-1">
                <a className="contact-detail" href="https://wa.me/923390145069" target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp: 03390145069</a>
                <a className="contact-detail" href="mailto:rana5729585@gmail.com"><Mail size={17} /> rana5729585@gmail.com</a>
                <div className="contact-detail"><Check size={17} /> Based in Pakistan · Available for remote work</div>
                <a className="whatsapp-cta" href="https://wa.me/923390145069" target="_blank" rel="noreferrer"><MessageCircle size={16} /> Chat on WhatsApp</a>
              </div>
            </div>
            <form className="contact-form reveal delay-2" onSubmit={handleSubmit} data-testid="form-contact">
              <div className="form-grid">
                <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" required placeholder="How should I address you?" data-testid="input-contact-name" /></div>
                <div className="field"><label htmlFor="email">Work email</label><input id="email" name="email" type="email" required placeholder="you@company.com" data-testid="input-contact-email" /></div>
                <div className="field"><label htmlFor="company">Business / company</label><input id="company" name="company" placeholder="Optional" data-testid="input-contact-company" /></div>
                <div className="field"><label htmlFor="phone">Phone / WhatsApp</label><input id="phone" name="phone" type="tel" placeholder="03390145069" data-testid="input-contact-phone" /></div>
                <div className="field"><label htmlFor="service">What do you need?</label><select id="service" name="service" defaultValue="" data-testid="select-contact-service"><option value="" disabled>Select a service area</option><option>Social media management</option><option>Meta Ads management</option><option>Web development</option><option>E-commerce or landing page</option><option>Digital marketing</option><option>AI automation</option><option>Not sure yet</option></select></div>
                <div className="field full"><label htmlFor="message">The useful context</label><textarea id="message" name="message" required placeholder="What are you building, changing or trying to solve?" data-testid="textarea-contact-message" /></div>
              </div>
              <button className="button-primary" type="submit" data-testid="button-submit-contact">{submitted ? 'Message noted' : 'Send the first note'} <Send size={15} /></button>
              <div className="form-note" aria-live="polite">{submitted ? 'Thank you. Your note is ready for a reply — replace this with your preferred form backend when you are ready.' : 'No sales script. Just a clear first step.'}</div>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <button className="brand" onClick={() => scrollTo('top')} data-testid="button-footer-home"><span className="brand-mark">/</span><span>Abdullah Rana</span></button>
            <div className="socials" aria-label="Social links">
              {['LinkedIn', 'Instagram', 'Facebook', 'WhatsApp'].map((social) => <button className="social-placeholder" key={social} onClick={() => scrollTo('contact')} data-testid={`button-social-${social.toLowerCase()}`}>{social} · link soon</button>)}
            </div>
          </div>
          <div className="footer-bottom"><span className="footer-small">Digital services for businesses ready to move with clarity.</span><span className="footer-small">© {new Date().getFullYear()} Abdullah Rana. All rights reserved.</span></div>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;