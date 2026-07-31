const skills = ['Customer Support', 'Email Handling', 'Chat Support', 'Order Processing', 'Teamwork', 'Problem Solving', 'Decision Making', 'Quick Learning', 'Marathi', 'Hindi', 'English'];

const projects = [
  {
    title: 'Customer Support Analytics',
    desc: 'Track customer issues, response time, and common query categories.',
    points: ['Analyze support tickets and query categories.', 'Create summary reports for team performance.', 'Show insights using charts and tables.'],
  },
  {
    title: 'Order Tracking Report',
    desc: 'Focus on shipping and delivery updates, delays, and process gaps.',
    points: ['Track delivery status and pending orders.', 'Identify delay patterns.', 'Present findings in a clean dashboard style format.'],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Portfolio</p>
            <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">Shahista Inamdar</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              Self-motivated professional with customer support experience, strong communication skills, and a growing interest in data analysis, reporting, and technology-driven work.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <p className="text-sm text-slate-300">Contact</p>
            <p className="mt-1 font-medium">8237278860</p>
            <p className="text-sm text-slate-300">shahistai0312@gmail.com</p>
            <p className="text-sm text-slate-300">Ahmednagar, Maharashtra</p>
          </div>
        </header>

        <section className="grid gap-6 py-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="mt-4 leading-7 text-slate-300">
              I am Shahista Inamdar, a B.Sc. Computer Science graduate with customer support experience. I enjoy learning fast, solving problems, and working in team environments. My goal is to grow into a data-focused and analytical role.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Skills</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-4" id="projects">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.desc}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                  {project.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 py-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Experience</h2>
            <div className="mt-4">
              <p className="font-semibold">Customer Support Associate</p>
              <p className="text-sm text-slate-300">Utturkar’s Wood Culture, Swargate, Pune</p>
              <p className="text-sm text-slate-300">Jan 2023 – Jul 2023</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                <li>Assisted senior customer service agents in managing inquiries.</li>
                <li>Responded to customer emails and chats.</li>
                <li>Processed customer orders and shared shipping updates.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Education</h2>
            <div className="mt-4 space-y-4 text-sm text-slate-300">
              <div>
                <p className="font-semibold text-white">B.Sc. (Computer Science)</p>
                <p>New Arts, Commerce & Science College, Ahmednagar, Pune University</p>
                <p>58.31% • 2019</p>
              </div>
              <div>
                <p className="font-semibold text-white">HSC</p>
                <p>Shri Dhokeshwar Junior College, Takli Dhokeshwar</p>
                <p>65.67% • 2015</p>
              </div>
              <div>
                <p className="font-semibold text-white">SSC</p>
                <p>Shri Dhokeshwar Vidyalaya, Takli Dhokeshwar</p>
                <p>72.20% • 2013</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/20 to-cyan-500/10 p-6">
          <h2 className="text-2xl font-bold">Career Objective</h2>
          <p className="mt-3 max-w-4xl leading-7 text-slate-200">
            To secure an opportunity in a challenging environment where I can apply my communication, customer handling, and learning skills while growing into a data-focused professional role.
          </p>
        </section>

        <footer className="py-10 text-center text-sm text-slate-400">
          © 2026 Shahista Inamdar. Built with Next.js and Tailwind CSS.
        </footer>
      </div>
    </main>
  );
}