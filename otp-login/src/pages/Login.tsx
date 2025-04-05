import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import matrixImage from "../assets/matrix.jpg"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!email.includes("@")) {
      setMessage("❗ Enter Valid Email id");
      setMessageColor("text-red-500");
      return;
    }

    try {
      // await axios.post("http://localhost:5000/send-otp", { email });
      await axios.post("/api/send-otp", { email });
      localStorage.setItem("email", email);
      setMessage("✔ OTP Sent Successfully");
      setMessageColor("text-green-500");
      setTimeout(() => navigate("/verify"), 2000);
    } catch (err) {
      console.error("OTP Send Error:", err);
      setMessage("❗ Failed to send OTP");
      setMessageColor("text-red-500");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black relative">
      
      <img src={matrixImage} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Matrix Background" />
      
     
     
      <h2
  className="text-8xl mb-6 z-10 text-white"
  style={{ fontFamily: '"Jersey 10", "Jersey 10 Fallback"', fontWeight: 400, fontStyle: 'normal' }}
>
  Welcome to Demo
</h2>


      <div className="relative bg-gray-600 bg-opacity-90 p-8 rounded-xl shadow-xl text-left w-120 h-180">
        <h1 className="text-3xl font-bold text-white text-center mb-4">Login</h1>

        <label className="block text-gray-300 text-lg mb-4 mt-8">Enter Email:</label>
        <input
          type="email"
          className="w-full p-3 text-black rounded-lg border border-gray-400 bg-white outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {message && <p className={`mt-2 text-sm ${messageColor}`}>{message}</p>}

      
        <div className="mt-90 flex justify-center">
          <button
            onClick={handleSendOtp}
            className="bg-gray-200 text-black font-lg px-16 py-4 rounded-lg shadow-lg transition hover:bg-gray-300"
          >
            Get OTP
          </button>
        </div>
      </div>
    </div>
  ); 
}
