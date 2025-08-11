import { useDispatch, useSelector } from "react-redux";
import { signupUser} from "../features/auth/authSlice";
import { useState } from "react";

export default function Login() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(form));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blackberry-light via-blackberry to-blackberry-accent">
      <form
        onSubmit={handleSubmit}
        className="bg-blackberry-light p-6 rounded-lg shadow-3d w-80 space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">SignUp</h1>
         <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button className="w-full" disabled={loading}>
          {loading ? "SignUp in..." : "SignUp"}
        </button>
      </form>
    </div>
  );
}
