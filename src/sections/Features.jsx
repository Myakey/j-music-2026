export default function Features() {
  return (
    <section
      id="features"
      className="border-t border-black px-8 py-24"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-12">
        <div>
          <h3 className="font-medium mb-2">Minimal</h3>
          <p className="text-sm opacity-70">
            Nothing extra. Everything intentional.
          </p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Fast</h3>
          <p className="text-sm opacity-70">
            Lightweight and distraction-free.
          </p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Timeless</h3>
          <p className="text-sm opacity-70">
            Black and white always holds up.
          </p>
        </div>
      </div>
    </section>
  );
}
