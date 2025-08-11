import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./pages/login";
import Signup from "./pages/signUp";
import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/auth/login" element={<Login />} />
        <Route path="/api/auth/register" element={<Signup />} />
      </Routes>
      <footer>
        <div className="text-center text-purple-900 py-4">
          &copy; {new Date().getFullYear()} MiniSocial. All rights reserved.
        </div>
      </footer>
    </Router>
  );
}
