import Button from "../components/Button";

export default function Hero() {
  return (
    <section
      className="
        max-w-5xl mx-auto
        px-8 py-32
        animate-fadeUp
      "
    >
      <h1 className="text-6xl leading-tight font-semibold mb-6">
        Build.
        <br />
        Ship.
        <br />
        Stay Simple.
      </h1>

      <p className="text-lg max-w-md opacity-70 mb-10">
        A minimal black and white landing page focused on clarity.
      </p>

      <Button>Get Started</Button>
    </section>
  );
}
