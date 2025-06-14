import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Nav */}
      <nav className="w-full flex justify-end gap-4 px-6 py-4 items-center">
        <Link
          to="/login"
          className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition"
        >
          Log In
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Sign Up
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-6">
          Welcome to Dev Snippets 🚀
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
          Save, organize, and translate your favorite code snippets — all in one
          place.
        </p>
        <div className="flex gap-4">
          <Link
            to="/register"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            I already have an account
          </Link>
        </div>
      </main>
    </div>
  );
}
