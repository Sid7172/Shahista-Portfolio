


import Image from 'next/image';

const stats = [
  { value: '3+Years', label: 'Content Strategy' },
  { value: '500+', label: 'Single-Day Inquiries' },
  //{ value: '10,089', label: 'Flash Product Sales' },
  { value: '50+', label: 'Creators Onboarded' },
  { value: '1.2M+', label: 'Community Reach' },
  { value: '30%', label: 'C-Suite Lead Win Rate' },
];

const services = [
  {
    title: 'Content Strategy & Systems',
    desc: 'End-to-end content frameworks, editorial calendars, brand messaging, and multi-channel planning.',
  },
  {
    title: 'Short-Form Video & Reels',
    desc: 'Short-form video hooks, scripts, and storytelling systems designed to drive engagement and reach.',
  },
  {
    title: 'Social Media Growth',
    desc: 'Plan and execute organic growth campaigns, community engagement strategies, and platform-specific content optimization.',
  },
  {
    title: 'Personal Branding & Outreach',
    desc: 'LinkedIn positioning, executive outreach, creator management, and authority-building campaigns.',
  },
];

const caseStudies = [
  {
    tag: 'Social Media • Hong Kong',
    title: '72 Dragons',
    desc: 'I developed a content strategy centered on film history, Cannes Film Festival coverage, and arts-focused storytelling. The approach combined SEO articles, social posts, festival highlights, and cross-cultural narratives to attract both art lovers and cinema audiences.',
    metric1: 'Boosted Cannes Films Festival Engagement',
    metric2: 'International Films',
  },
  {
    tag: 'Content Stratergy • Maharashtra, India',
    title: 'A2Z IT Hub',
    desc: 'Created a structured content plan focused on brand communication, social media consistency, and audience-first messaging. The approach included content scheduling, performance tracking, and regular optimization based on engagement trends to drive inquiries.',
    metric1: '500+ Inquiries in 1 Day',
    metric2: '87% Engagement Boost',
  },
  {
    tag: 'Social Media • Pune, India',
    title: 'Brand Make Media',
    desc: 'Designed a launch content system combining urgency-driven reels, product showcase storytelling, and multi-channel distribution for one of our Client.',
    metric1: '1200+ Units Sold',
    metric2: 'Higher audience engagement',
  },
  {
    tag: 'Community & Branding • Pune, India',
    title: 'Utturkars Wood Culture',
    desc: 'Drove customer acquisition through digital marketing, helping the brand convert online visibility into real leads.',
    metric1: '120+ Customers Onboarded',
    metric2: 'Higher Lead Generation',
  },
];

const experience = [
  {
    role: 'Social Media Specialist',
    company: '72 Dragons (Remote)',
    time: 'Dec 2023 – July 2026',
    place: 'Hong Kong & Shanghai',
    points: [
      'Led Arts Division social media content strategy with a focus on film, Cannes, and cultural storytelling.',
      'Created social content covering Cannes Film Festival and cinema trends.',
      'Improved audience engagement through international art and film-focused content campaigns.',
    ],
  },
  {
    role: 'Social Media Team Lead',
    company: 'A2Z IT Hub',
    time: 'June 2022 – Oct 2023',
    place: 'India',
    points: [
      'Handled social media strategy, content scheduling, and audience engagement for the company.',
      'Managed day-to-day social media operations and maintained consistent brand communication.',
      'Created content plans and monitored performance to improve reach and visibility.',
    ],
  },
  {
    role: 'Social Media Executive',
    company: 'Brand Make Media',
    time: 'Feb 2022 – Apr 2023',
    place: 'Pune, India',
    points: [
      'Handled social media strategy, content scheduling, and audience engagement for the brand.',
      'Supported audience engagement through regular posting and brand interaction.',
      'Coordinated with creative teams to improve reach, visibility, and engagement.',
    ],
  },
];

const skills = [
  'Content Strategy',
  'Brand Positioning',
  'Storytelling',
  'Short-Form Video',
  'Community Management',
  'Creator Partnerships',
  'Personal Branding',
  'LinkedIn Outreach',
  'Meta Business Suite',
  'Canva',
];

const brands = ['72 Dragons Films', 'A2Z IT Hub', 'Brand Make',"Utturkar's Wood Culture"];

export default function Home() {
  return (
    <main className="bg-[#07111f] text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Portfolio</p>
            <h1 className="mt-2 text-2xl font-bold md:text-4xl">Shahista Inamdar</h1>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-cyan-400/40 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Contact
          </a>
        </header>

        <div className="grid flex-1 gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Social Media Specialist • Social Media Growth Leader
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Turning content into{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                predictable growth
              </span>{' '}
              and brand authority.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              I help brands build high-performing content systems that drive engagement,
              audience growth, and qualified leads across the Hong Kong and India.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#case-studies"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Case Studies
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Let’s Connect
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/20 to-violet-500/10 p-6 shadow-2xl shadow-cyan-500/10">
            <div className="flex flex-col gap-6">
              {/* PROFILE PHOTO ADDED HERE */}
              <div className="mx-auto overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950/60 shadow-xl">
                <Image
                  src="/prof.png"
                  alt="Shahista Inamdar"
                  width={360}
                  height={420}
                  className="h-[420px] w-[360px] object-cover"
                  priority
                />
              </div>

              {/* ABOUT SECTION ADDED BELOW PHOTO */}
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">About</p>
                <h3 className="mt-3 text-2xl font-bold text-white">
                  Building high-performing content systems
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  My approach blends strategic marketing, storytelling, and measurable execution.
                  From creator-led launches to executive branding, I design content that creates
                  real business outcomes.
                </p>

                <div className="mt-6 space-y-3 text-sm text-slate-200">
                  <p>• B.Sc. in Computer Science</p>
                  <p>• Digital Marketing Certified from Advanto Software</p>
                  {/* <p>• 30% C-Suite Lead Conversion</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Core Services</p>
          <h3 className="mt-3 text-2xl font-bold md:text-3xl">What I do best</h3>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Featured Work</p>
            <h3 className="mt-3 text-2xl font-bold md:text-3xl">Case studies</h3>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {caseStudies.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-cyan-300">{item.tag}</p>
              <h4 className="mt-3 text-2xl font-bold">{item.title}</h4>
              <p className="mt-4 leading-7 text-slate-300">{item.desc}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-950/60 p-4">
                  <p className="text-sm text-slate-400">Impact</p>
                  <p className="mt-1 font-semibold">{item.metric1}</p>
                </div>
                <div className="rounded-2xl bg-slate-950/60 p-4">
                  <p className="text-sm text-slate-400">Result</p>
                  <p className="mt-1 font-semibold">{item.metric2}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Career Timeline</p>
          <h3 className="mt-3 text-2xl font-bold md:text-3xl">Work experience</h3>
          <div className="mt-8 space-y-6">
            {experience.map((job) => (
              <div key={job.role} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="text-xl font-semibold">{job.role}</h4>
                    <p className="text-cyan-300">{job.company}</p>
                  </div>
                  <p className="text-sm text-slate-400">
                    {job.time} • {job.place}
                  </p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-300">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Skills</p>
          <h3 className="mt-3 text-2xl font-bold md:text-3xl">Growth toolkit</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Brands & Communities</p>
          <h3 className="mt-3 text-2xl font-bold md:text-3xl">Selected brands handled</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {brands.map((brand) => (
              <div
                key={brand}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-slate-200"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>
          <h3 className="mt-3 text-2xl font-bold md:text-3xl">Ready to scale your brand?</h3>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Whether you need content strategy, creator partnerships, social media growth, or
            executive branding, I’m available for collaboration.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">Email</p>
              <p className="mt-1 font-medium">shahistai0312@gmail.com</p>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">Phone</p>
              <p className="mt-1 font-medium">+91 8237278860</p>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">Base</p>
              <p className="mt-1 font-medium">Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}