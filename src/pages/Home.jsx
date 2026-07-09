// function Home() {
//   return (
//     <div className="flex justify-around bg-black text-white h-100 w-100% items-center text-2xl m-5 rounded-lg">
//       <h1>Home Page</h1>
//       <p>Welcome to our E-Learning platform.</p>
//     </div>
//   );
// }

//  export default Home;


import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col justify-center items-center text-center p-6">
      
      {/* Top Banner Tag */}
      <span className="text-xs md:text-sm font-semibold tracking-wideset text-blue-400 uppercase bg-blue-950 px-4 py-1.5 rounded-full border border-blue-800 mb-6">
        ⚡ Next-Gen Technical Learning Platform
      </span>

      {/* Main Title Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
        Master Modern Coding Skills with <span className="text-blue-500">SkillUp</span> ⚛️
      </h1>

      {/* Sub-text Paragraph */}
      <p className="text-base md:text-xl font-medium text-gray-400 mt-6 max-w-xl leading-relaxed">
        Build high-performance web applications using React, Tailwind CSS, and advanced backend systems. Start your deployment pipeline today. 🚀
      </p>

      {/* Action Buttons with Hover Transitions */}
      <div className="flex gap-4 mt-8 flex-wrap justify-center">
        <Link 
          to="/courses" 
          className="px-6 py-3 bg-blue-600 text-white font-bold text-base rounded-full hover:bg-blue-500 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 inline-block shadow-lg shadow-blue-900/40"
        >
          Explore Courses 🛠️
        </Link>
        <Link 
          to="/about" 
          className="px-6 py-3 border-2 border-slate-700 text-gray-300 font-bold text-base rounded-full hover:bg-slate-800 hover:text-white hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 inline-block"
        >
          About Platform ℹ️
        </Link>
      </div>

      {/* Tech Stack Feature Badges Grid */}
      <div className="flex gap-6 mt-16 flex-wrap justify-center items-center text-xs md:text-sm font-semibold text-gray-500">
        <div className="flex items-center gap-2 border border-slate-800 p-2 px-4 rounded-xl bg-slate-950">
          <span>⚛️</span> React Router
        </div>
        <div className="flex items-center gap-2 border border-slate-800 p-2 px-4 rounded-xl bg-slate-950">
          <span>⚡</span> Vite Core
        </div>
        <div className="flex items-center gap-2 border border-slate-800 p-2 px-4 rounded-xl bg-slate-950">
          <span>🛠️</span> Tailwind CSS
        </div>
      </div>

    </div>
  );
}
