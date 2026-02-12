export default function Footer() {
  return (
    <footer className="w-full mt-auto px-6 py-4 border-t text-sm text-gray-600 flex justify-between items-center">
      <span>© {new Date().getFullYear()} MyApp</span>
      <div className="flex gap-4">
        <a href="#" className="hover:text-black">Privacy</a>
        <a href="#" className="hover:text-black">Terms</a>
        <a href="#" className="hover:text-black">Contact</a>
      </div>
    </footer>
  );
}