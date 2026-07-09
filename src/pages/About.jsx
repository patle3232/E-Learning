//  function About() {
//   return (
//     <div   className="flex justify-around bg-black text-white h-100 w-100% items-center text-2xl m-5 rounded-lg">
//       <h2>About Us</h2>
//       <p>We provide world-class coding education.</p>
//     </div>
//   );
// }

// export default About;



function About() {
  return (

    <div className="bg-slate-950 text-white min-h-screen p-6 flex flex-col items-center justify-center text-center">
      
  
      <div className="border border-green-500 bg-zinc-900 p-8 rounded-sm shadow-lg   max-w-xl transition-all duration-300 hover:scale-105 hover:rounded-2xl hover:shadow-green-400 ">
        
     
        <h2 className="text-3xl font-black text-green-400 mb-4 tracking-wide uppercase">
          About  <span className="text-slate-500">Us 🎓</span> 
        </h2>
        
        
        <p className="text-xl text-slate-200 mb-6 font-medium">
          We provide world-class coding education In Maharastra.
        </p>

        {/* Chhote Simple Cards (Bina advanced loop ke, direct coding) */}
        <div className="space-y-7 text-center text-base">
          <div className="bg-black/50 p-5 rounded-full border border-zinc-800">
            📊 <strong className="text-green-400">Performance:</strong> Weekly mock tests and progress tracking.
          </div>
          <div className="bg-black/50 p-5 rounded-full border border-zinc-800">
            🏆 <strong className="text-green-400">Results:</strong> 100% real-world project based learning.
          </div>
          <div className="bg-black/50 p-5 rounded-full border border-zinc-800">
            💰 <strong className="text-green-400">Fee & Guarantee:</strong> Affordable fees with a 7-day trial.
          </div>
          <div className="bg-black/50 p-5 rounded-full border border-zinc-800">
            🔄 <strong className="text-green-400">Teaching Flow:</strong> Logic building first, then MERN stack.
          </div>
        </div>

      </div>

    </div>
  );
}

export default About;
