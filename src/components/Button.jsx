export default function Button({ children }) {
  return (
    <button
      className="
        border border-black
        px-5 py-2
        text-sm
        transition
        hover:bg-black hover:text-white
      "
    >
      {children}
    </button>
  );
}
