import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import Footer from "../Footer/Footer";
import Developers from "../components/Developers";
import { ToastContainer, toast } from "react-toastify";  // Keep this for notifications
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      toast.success("Signup successful! Welcome aboard!");
    } catch (error) {
      console.log(error);
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <>
      <BackgroundImage />
      <div className="flex flex-col items-center justify-center h-screen px-4 sm:px-8 md:px-16">
        <div className="content absolute inset-0 z-10 bg-gray-900 bg-opacity-50">
          <Header login={"login"} />
          <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto px-4 py-6 rounded-lg bg-gray-800 bg-opacity-70">
            <div className="text text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">Unlimited movies, TV shows, and more.</h1>
              <h4 className="text-xl sm:text-2xl text-white mt-4">Watch anywhere. Cancel anytime.</h4>
              <h6 className="text-lg sm:text-xl text-white mt-4">Ready to watch? Enter your email to create or restart membership.</h6>
            </div>
            <div className="form w-full">
              <input
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="block w-full p-4 mb-4 border border-gray-300 rounded-lg bg-gray-900 bg-opacity-50"
              />
              {showPassword && (
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="block w-full p-4 mb-4 border border-gray-300 rounded-lg bg-gray-900 bg-opacity-50"
                />
              )}
              {!showPassword && (
                <button
                  onClick={() => setShowPassword(true)}
                  className="block w-full p-4 mb-4 bg-red-600 text-white rounded-lg"
                >
                  Get Started
                </button>
              )}
              {showPassword && (
                <button
                  onClick={handleSignUp}
                  className="block w-full p-4 mb-4 bg-red-600 text-white rounded-lg"
                >
                  Sign Up
                </button>
              )}
            </div>
          </div>
        </div>
        <Developers />
        <Footer />
      </div>
      <ToastContainer />  {/* Add ToastContainer here to show the toast notifications */}
    </>
  );
}
