import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between shadow-md bg-white">
      <h1 className="text-xl font-semibold">MyApp</h1>

      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/projects" className="hover:text-blue-600">Projects</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
      </div>
    </nav>
  );
}