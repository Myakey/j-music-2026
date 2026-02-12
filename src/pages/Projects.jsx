export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-32">
      <h1 className="text-5xl font-semibold mb-12">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Project
          title="Minimal Landing"
          description="A black and white landing page focused on typography and spacing."
        />
        <Project
          title="Dashboard UI"
          description="A stripped-back dashboard interface with zero visual clutter."
        />
        <Project
          title="Component Library"
          description="Reusable UI primitives built with consistency and restraint."
        />
      </div>
    </section>
  );
}

function Project({ title, description }) {
  return (
    <div className="border border-black p-6">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-sm opacity-70">{description}</p>
    </div>
  );
}
