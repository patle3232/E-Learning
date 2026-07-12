// function Courses() {
//   return (
//     <div   className="flex justify-around bg-black text-white h-100 w-100% items-center text-2xl m-5 rounded-lg">
//       <h2>Our Courses</h2>
//       <p>React JS, JavaScript, and Node.js.</p>
//     </div>
//   );
// }

// import { useState } from "react";

// function Courses() {
//   const defaultStyles = 'bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-green-500/50 shadow-sm hover:shadow-green-500/10 transition-all duration-500 hover:scale-105 cursor-pointer backdrop-blur-sm group';
//   const [chnage, setChange] = useState(defaultStyles);

//   return (
//     <div className="bg-slate-950 text-white min-h-screen p-6 flex flex-col items-center overflow-hidden relative">
      
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-green-500/5 blur-[100px] rounded-full pointer-events-none"></div>

//       <div className="text-center mb-12 relative z-10">
//         <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2 uppercase tracking-wide animate-pulse">
//           Our Courses 🎓
//         </h2>
//         <p className="text-slate-400 text-sm font-medium tracking-wide">Simple and high-quality tech training programs</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl relative z-10">


//         <div
//         onClick={() => setChange("bg-gradient-to-br from-red-950 to-slate-900 border border-yellow-500/40 p-6 rounded-xl transition-all duration-500 shadow-xl shadow-yellow-500/10 scale-105 cursor-pointer")}
//           onDoubleClick={() => setChange(defaultStyles)}
//           className={chnage}

        
//         >

//           <div>
//           <div className="text-3xl mb-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">🌐</div>
//           <h3 className={`text-xl font-bold transition-colors duration-300 ${chnage.includes('red-950') ? 'text-yellow-400' : 'text-white'}`}>MERN Stack</h3>
//           <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">Full stack web development from scratch.</p>
//           <p className={`text-xs font-semibold mt-4 tracking-wider uppercase transition-colors duration-300 ${chnage.includes('red-950') ? 'text-yellow-400' : 'text-green-400'}`}>⏱️ Duration: 4 Months</p>
//         </div>

//         </div>

       

//         <div
//         onClick={() => setChange("bg-gradient-to-br from-red-950 to-slate-900 border border-yellow-500/40 p-6 rounded-xl transition-all duration-500 shadow-xl shadow-yellow-500/10 scale-105 cursor-pointer")}
//           onDoubleClick={() => setChange(defaultStyles)}
//           className={chnage}


//         >

//           <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-green-500/50 transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-green-500/10 backdrop-blur-sm cursor-pointer group">
//           <div className="text-3xl mb-3">📱</div>
//           <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">Flutter App</h3>
//           <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">Cross-platform mobile apps for Android & iOS.</p>
//           <p className="text-xs text-green-400 font-semibold mt-4 tracking-wider uppercase">⏱️ Duration: 3 Months</p>
//         </div>

//         </div>

//         <div
//         onClick={() => setChange("bg-gradient-to-br from-red-950 to-slate-900 border border-yellow-500/40 p-6 rounded-xl transition-all duration-500 shadow-xl shadow-yellow-500/10 scale-105 cursor-pointer")}
//           onDoubleClick={() => setChange(defaultStyles)}
//           className={chnage}


//         >

          
//         <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-green-500/50 transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-green-500/10 backdrop-blur-sm cursor-pointer group">
//           <div className="text-3xl mb-3">🤖</div>
//           <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">Android Native</h3>
//           <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">App development using Java and Kotlin languages.</p>
//           <p className="text-xs text-green-400 font-semibold mt-4 tracking-wider uppercase">⏱️ Duration: 3.5 Months</p>
//         </div>

//         </div>

//         <div

//         onClick={() => setChange("bg-gradient-to-br from-red-950 to-slate-900 border border-yellow-500/40 p-6 rounded-xl transition-all duration-500 shadow-xl shadow-yellow-500/10 scale-105 cursor-pointer")}
//           onDoubleClick={() => setChange(defaultStyles)}
//           className={chnage}
        
//         >

//            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-green-500/50 transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-green-500/10 backdrop-blur-sm cursor-pointer group">
//           <div className="text-3xl mb-3">🧠</div>
//           <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">AI / ML</h3>
//           <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">Learn Python, data science, and smart models.</p>
//           <p className="text-xs text-green-400 font-semibold mt-4 tracking-wider uppercase">⏱️ Duration: 5 Months</p>
//         </div>

//         </div>

//         <div

//          onClick={() => setChange("bg-gradient-to-br from-red-950 to-slate-900 border border-yellow-500/40 p-6 rounded-xl transition-all duration-500 shadow-xl shadow-yellow-500/10 scale-105 cursor-pointer")}
//           onDoubleClick={() => setChange(defaultStyles)}
//           className={chnage}
        

        
//         >

//            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-green-500/50 transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-green-500/10 backdrop-blur-sm cursor-pointer group">
//           <div className="text-3xl mb-3">☕</div>
//           <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">Core Java</h3>
//           <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">Object-oriented programming and backend basics.</p>
//           <p className="text-xs text-green-400 font-semibold mt-4 tracking-wider uppercase">⏱️ Duration: 3 Months</p>
//         </div>

//         </div>

        


       

       

//        <div

//         onClick={() => setChange("bg-gradient-to-br from-red-950 to-slate-900 border border-yellow-500/40 p-6 rounded-xl transition-all duration-500 shadow-xl shadow-yellow-500/10 scale-105 cursor-pointer")}
//           onDoubleClick={() => setChange(defaultStyles)}
//           className={chnage}
        


//        >
//          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-green-500/50 transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-green-500/10 backdrop-blur-sm cursor-pointer group">
//           <div className="text-3xl mb-3">📊</div>
//           <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">Python Data</h3>
//           <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">Data analysis using libraries like Pandas & Numpy.</p>
//           <p className="text-xs text-green-400 font-semibold mt-4 tracking-wider uppercase">⏱️ Duration: 2.5 Months</p>
//         </div>

//        </div>

       

//       </div>
//     </div>
//   );
// }

// export default Courses;


import { useState } from "react";

function Courses() {
  const defaultStyles = 'bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-green-500/50 shadow-sm hover:shadow-green-500/10 transition-all duration-500 hover:scale-105 cursor-pointer backdrop-blur-sm group';
  const [chnage, setChange] = useState(defaultStyles);

  return (
    <div className="bg-slate-950 text-white min-h-screen p-6 flex flex-col items-center overflow-hidden relative">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent mb-2 uppercase tracking-wide animate-pulse">
          Our Courses 🎓
        </h2>
        <p className="text-slate-400 text-sm font-medium tracking-wide">Simple and high-quality tech training programs</p>
      </div>

      <button 
        onClick={() => setChange("bg-gradient-to-br from-cyan-950/80 to-slate-900 border border-cyan-500/40 p-6 rounded-xl transition-all duration-500 shadow-xl shadow-cyan-500/20 scale-105 cursor-pointer")}
        onDoubleClick={() => setChange(defaultStyles)}
        className="mb-10 relative z-10 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-emerald-600 hover:from-cyan-400 hover:to-emerald-500 text-slate-950 font-black text-xs tracking-wider uppercase rounded-lg shadow-lg active:scale-95 transition-all duration-200"
      >
        ✨ Transform All Cards
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl relative z-10">

        <div
          onClick={() => setChange("bg-gradient-to-br from-cyan-950/80 to-slate-900 border border-cyan-500/40 p-6 rounded-xl transition-all duration-500 shadow-xl shadow-cyan-500/20 scale-105 cursor-pointer")}
          onDoubleClick={() => setChange(defaultStyles)}
          className={chnage}
        >
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-cyan-500/10 backdrop-blur-sm cursor-pointer group">
            <div className="text-3xl mb-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">🌐</div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">MERN Stack</h3>
            <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">Full stack web development from scratch.</p>
            <p className="text-xs text-cyan-400 font-semibold mt-4 tracking-wider uppercase">⏱️ Duration: 4 Months</p>
          </div>
        </div>

        <div
          onClick={() => setChange("bg-gradient-to-br from-cyan-950/80 to-slate-900 border border-cyan-500/40 p-6 rounded-xl transition-all duration-500 shadow-xl shadow-cyan-500/20 scale-105 cursor-pointer")}
          onDoubleClick={() => setChange(defaultStyles)}
          className={chnage}
        >
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-cyan-500/10 backdrop-blur-sm cursor-pointer group">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Flutter App</h3>
            <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">Cross-platform mobile apps for Android & iOS.</p>
            <p className="text-xs text-cyan-400 font-semibold mt-4 tracking-wider uppercase">⏱️ Duration: 3 Months</p>
          </div>
        </div>

        <div
          onClick={() => setChange("bg-gradient-to-br from-cyan-950/80 to-slate-900 border border-cyan-500/40 p-6 rounded-xl transition-all duration-500 shadow-xl shadow-cyan-500/20 scale-105 cursor-pointer")}
          onDoubleClick={() => setChange(defaultStyles)}
          className={chnage}
        >
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-cyan-500/10 backdrop-blur-sm cursor-pointer group">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Android Native</h3>
            <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">App development using Java and Kotlin languages.</p>
            <p className="text-xs text-cyan-400 font-semibold mt-4 tracking-wider uppercase">⏱️ Duration: 3.5 Months</p>
          </div>
        </div>

        <div
          onClick={() => setChange("bg-gradient-to-br from-cyan-950/80 to-slate-900 border border-cyan-500/40 p-6 rounded-xl transition-all duration-500 shadow-xl shadow-cyan-500/20 scale-105 cursor-pointer")}
          onDoubleClick={() => setChange(defaultStyles)}
          className={chnage}
        >
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-cyan-500/10 backdrop-blur-sm cursor-pointer group">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">AI / ML</h3>
            <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">Learn Python, data science, and smart models.</p>
            <p className="text-xs text-cyan-400 font-semibold mt-4 tracking-wider uppercase">⏱️ Duration: 5 Months</p>
          </div>
        </div>

        <div
          onClick={() => setChange("bg-gradient-to-br from-cyan-950/80 to-slate-900 border border-cyan-500/40 p-6 rounded-xl transition-all duration-500 shadow-xl shadow-cyan-500/20 scale-105 cursor-pointer")}
          onDoubleClick={() => setChange(defaultStyles)}
          className={chnage}
        >
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-cyan-500/10 backdrop-blur-sm cursor-pointer group">
            <div className="text-3xl mb-3">☕</div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Core Java</h3>
            <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">Object-oriented programming and backend basics.</p>
            <p className="text-xs text-cyan-400 font-semibold mt-4 tracking-wider uppercase">⏱️ Duration: 3 Months</p>
          </div>
        </div>

        <div
          onClick={() => setChange("bg-gradient-to-br from-cyan-950/80 to-slate-900 border border-cyan-500/40 p-6 rounded-xl transition-all duration-500 shadow-xl shadow-cyan-500/20 scale-105 cursor-pointer")}
          onDoubleClick={() => setChange(defaultStyles)}
          className={chnage}
        >
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-cyan-500/10 backdrop-blur-sm cursor-pointer group">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Python Data</h3>
            <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">Data analysis using libraries like Pandas & Numpy.</p>
            <p className="text-xs text-cyan-400 font-semibold mt-4 tracking-wider uppercase">⏱️ Duration: 2.5 Months</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Courses;
