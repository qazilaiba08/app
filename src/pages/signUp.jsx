import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../features/auth/authSlice";
import { useState } from "react";

export default function Login() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(form));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-purple-500/30 w-full max-w-sm space-y-4"
      >
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-500 to-pink-500">
          Welcome ❤️
        </h1>
        <p className="text-sm text-purple-300 text-center">
          Sign Up to your MiniSocial journey
        </p>
         {/* Name Input */}
        <input
          type="name"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-3 rounded-lg bg-white/5 border border-purple-500/40 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          required
        />
        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-3 rounded-lg bg-white/5 border border-purple-500/40 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          required
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full p-3 rounded-lg bg-white/5 border border-purple-500/40 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          required
        />

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm bg-red-900/20 p-2 rounded-md text-center">
            {error}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold text-white shadow-lg transition-all ${
            loading
              ? "bg-purple-800 cursor-not-allowed"
              : "bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:scale-105"
          }`}
        >
          {loading ? "Signing in..." : "Sign Up"}
        </button>

        {/* login Link */}
        <p className="text-center text-sm text-purple-300">
          you already have an account?{" "}
          <a
            href="/login"
            className="text-fuchsia-400 hover:underline hover:text-fuchsia-300"
          >
          Login
          </a>
        </p>
      </form>
    </div>
  );
}
