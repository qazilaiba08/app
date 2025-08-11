import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="bg-gradient-to-r from-black via-purple-900 to-black p-4 shadow-lg flex justify-between items-center sticky top-0 z-50 border-b border-purple-800/40">
      <Link
        to="/"
        className="text-2xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-500 to-pink-500 hover:scale-105 transition-all"
      >
        MiniSocial
      </Link>

      {/* Links */}
      <div className="flex gap-3">
        {user ? (
          <>
            <Link
              to="/profile"
              className="px-4 py-2 rounded-lg bg-white/10 border border-purple-500/30 hover:bg-purple-500/30 transition"
            >
              Profile
            </Link>
            <button
              onClick={() => dispatch(logout())}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:scale-105 transition-all shadow-lg"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg text- bg-gray-400/10 border border-purple-500/30 hover:bg-purple-600/50 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:scale-105 transition-all shadow-lg"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
