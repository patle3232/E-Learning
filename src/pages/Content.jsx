// function Content(){
//    return(
//       <>


//     <div    className="flex justify-around bg-black text-white h-100 w-100% items-center text-2xl m-5 rounded-lg">
//       <h1>hello</h1>
//       <h2>Content Should be add </h2>
   
//     </div>



//       </>
//    )
// };

// export default Content;

function Content() {
  return (
    // Premium dark theme container filling up the viewport
    <div className="bg-slate-950 text-white min-h-screen p-6 flex flex-col items-center justify-center">
      
      {/* Centered Glassmorphic Alert Box */}
      <div className="border border-slate-800 bg-slate-900 p-10 rounded-2xl shadow-2xl w-full max-w-md text-center transition-all duration-300 hover:scale-[1.02]">
        
        {/* Animated Empty Folder / Warning Icon */}
        <div className="text-6xl mb-4 animate-pulse select-none">
          📂
        </div>
        
        {/* Main Status Heading */}
        <h2 className="text-2xl font-black text-green-400 mb-2 uppercase tracking-wide">
          No Content Found
        </h2>
        
        {/* Description Text */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          We are currently updating our database with fresh study materials and code repositories. Please check back later!
        </p>

        {/* Informative Progress Loading Bar (Pure Tailwind, No External Plugins) */}
        <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800 mb-6">
          <div className="bg-green-500 h-full w-1/3 rounded-full animate-pulse"></div>
        </div>

        {/* Simple Navigation Anchor / Action Trigger */}
        <button className="w-full bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold py-2.5 rounded-lg text-xs tracking-wider uppercase transition-all duration-300">
          🔄 Refresh Page
        </button>

      </div>

    </div>
  );
}

export default Content;
