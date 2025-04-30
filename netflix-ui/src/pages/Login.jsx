import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      toast.success("Signin successful! Welcome aboard!");
      navigate("/"); // Redirect to homepage
    } catch (error) {
      console.error(error);
      toast.error(error.message); // Shows specific Firebase error (e.g., user not found)
    }
  };

  return (
    <div className="relative min-h-screen">
      <BackgroundImage />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-between">
        <Header />
        <div className="flex flex-col items-center justify-center h-full px-4 md:px-0">
          <div className="bg-black bg-opacity-70 w-full max-w-xl rounded-lg p-8">
            <div className="text-white text-2xl font-bold mb-6">Sign In</div>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="px-4 py-2 rounded-lg text-stone-950"
                required
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="px-4 py-2 rounded-lg text-stone-950"
                required
              />
              <button
                onClick={handleLogin}
                className="px-4 py-2 bg-red-600 rounded-lg cursor-pointer text-white font-bold"
              >
                Sign In
              </button>
            </div>
            <div className="text-white mt-4">
              New to Netflix?{" "}
              <Link to="/signup" className="text-red-600">
                Sign up now.
              </Link>
              <br />
              <span className="text-white opacity-75">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
