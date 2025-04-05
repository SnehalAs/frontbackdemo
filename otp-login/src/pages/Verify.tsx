import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Verify() {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const navigate = useNavigate();
  const email = localStorage.getItem('email');

  const handleVerify = async () => {
    if (!otp || otp.length < 4) {
      setMessage('❗ Enter Valid OTP');
      setMessageColor('text-red-500');
      return;
    }

    try {
      // await axios.post('http://localhost:5000/verify-otp', { email, otp });
      await axios.post("/api/verify-otp", { email, otp }); 
      setMessage('✔ Verification Successful');
      setMessageColor('text-green-500');
      setTimeout(() => navigate('/success'), 1500); 
    } catch {
      setMessage('❗ Invalid OTP');
      setMessageColor('text-red-500');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black relative">
      
      <div className="absolute inset-0 bg-[url('/matrix.jpg')] bg-cover opacity-50 z-0"></div>

      
  
      <h2
  className="text-8xl mb-6 z-10 text-white"
  style={{ fontFamily: '"Jersey 10", "Jersey 10 Fallback"', fontWeight: 400, fontStyle: 'normal' }}
>
  Welcome to Demo
</h2>

      
      <div className="relative bg-gray-600 bg-opacity-90 p-8 rounded-xl shadow-xl text-left w-120 h-180 z-10">
        <h1 className="text-3xl font-bold text-center text-white mb-4">Otp Verification</h1>

        <label className="block text-gray-300 text-lg mb-2 mt-16">Enter OTP:</label>
        <input
          type="text"
          className="w-full p-3 text-black rounded-lg border border-gray-400 bg-white outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        {message && <p className={`mt-2 text-sm ${messageColor}`}>{message}</p>}

        <div className="mt-70 flex justify-center">
          <button
            onClick={handleVerify}
            className="mt-4 bg-gray-200 text-black font-bold px-16 py-4 rounded-lg shadow-lg transition hover:bg-gray-300"
          >
            Login
          </button>
        </div>
      </div>
    </div> 
  );
}
