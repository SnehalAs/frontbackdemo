import successImage from '../assets/congrats.jpg';

export default function Success() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black relative">
      
      <img src={successImage} className="absolute inset-0 w-full h-full object-cover opacity-80 z-0" alt="Success Background" />

     
      <h1 className="relative text-8xl font-bold text-white text-center font-mono tracking-wide z-10">
        🎉 Congratulations, You Have <br /> Successfully Logged In 🎉
      </h1>
    </div>
  );
}
