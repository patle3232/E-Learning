// function Courses() {
//   return (
//     <div   className="flex justify-around bg-black text-white h-100 w-100% items-center text-2xl m-5 rounded-lg">
//       <h2>Our Courses</h2>
//       <p>React JS, JavaScript, and Node.js.</p>
//     </div>
//   );
// }


// export default Courses;


function Courses() {
  return (
    // Premium Dark background pure screen par aur content center me
    <div className="bg-slate-950 text-white min-h-screen p-6 flex flex-col items-center">

      {/* 1. Page ki Main Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-green-400 mb-2 uppercase tracking-wide  animate-bounce animate-pulse ">
          Our Courses 🎓
        </h2>
        <p className="text-slate-400 text-sm">Simple and high-quality tech training programs</p>
      </div>

      {/* 2. Responsive Grid Layout (Mobile par 1 box, Laptop par 3 box line me) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">

        {/* Box 1: MERN */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-green-500 shadow-sm  hover:shadow-green-500 transition-all duration-300 hover:scale-105 ">
          <div className="text-3xl mb-2">🌐</div>
          <h3 className="text-xl font-bold text-white">MERN Stack</h3>
          <p className="text-slate-400 text-sm mt-1">Full stack web development from scratch.</p>
          <p className="text-xs text-green-400 font-semibold mt-3">⏱️ Duration: 4 Months</p>
        </div>

        {/* Box 2: Flutter */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-green-500 transition-all duration-300 hover:scale-105  shadow-sm  hover:shadow-green-500  ">
          <div className="text-3xl mb-2">📱</div>
          <h3 className="text-xl font-bold text-white">Flutter App</h3>
          <p className="text-slate-400 text-sm mt-1">Cross-platform mobile apps for Android & iOS.</p>
          <p className="text-xs text-green-400 font-semibold mt-3">⏱️ Duration: 3 Months</p>
        </div>

        {/* Box 3: Android */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-green-500 transition-all duration-300  hover:scale-105  shadow-sm  hover:shadow-green-500">
          <div className="text-3xl mb-2">🤖</div>
          <h3 className="text-xl font-bold text-white">Android Native</h3>
          <p className="text-slate-400 text-sm mt-1">App development using Java and Kotlin languages.</p>
          <p className="text-xs text-green-400 font-semibold mt-3">⏱️ Duration: 3.5 Months</p>
        </div>

        {/* Box 4: AI / ML */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-green-500 transition-all duration-300 hover:scale-105  shadow-sm  hover:shadow-green-500">
          <div className="text-3xl mb-2">🧠</div>
          <h3 className="text-xl font-bold text-white">AI / ML</h3>
          <p className="text-slate-400 text-sm mt-1">Learn Python, data science, and smart models.</p>
          <p className="text-xs text-green-400 font-semibold mt-3">⏱️ Duration: 5 Months</p>
        </div>

        {/* Box 5: Java */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-green-500 transition-all duration-300  hover:scale-105  shadow-sm  hover:shadow-green-500">
          <div className="text-3xl mb-2">☕</div>
          <h3 className="text-xl font-bold text-white">Core Java</h3>
          <p className="text-slate-400 text-sm mt-1">Object-oriented programming and backend basics.</p>
          <p className="text-xs text-green-400 font-semibold mt-3">⏱️ Duration: 3 Months</p>
        </div>

        {/* Box 6: Python */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-green-500 transition-all duration-300    hover:scale-105  shadow-sm  hover:shadow-green-500">
          <div className="text-3xl mb-2">📊</div>
          <h3 className="text-xl font-bold text-white">Python Data</h3>
          <p className="text-slate-400 text-sm mt-1">Data analysis using libraries like Pandas & Numpy.</p>
          <p className="text-xs text-green-400 font-semibold mt-3">⏱️ Duration: 2.5 Months</p>
        </div>

      </div>

    </div>
  );
}

export default Courses;
