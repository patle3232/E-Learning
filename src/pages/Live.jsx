// function Live(){
//    return(
//       <>
//       <div   className="flex justify-around bg-black text-white h-100 w-100% items-center text-2xl m-5 rounded-lg">
//          <h1>Live</h1>
//       </div>
//       </>
//    );
// }

// export default Live;

function LiveSession() {
  return (

    <div className="bg-slate-950 text-white min-h-screen p-6 flex flex-col items-center justify-center">

      <div className="border border-slate-800 bg-slate-900 p-10 rounded-2xl shadow-2xl w-full max-w-md text-center transition-all duration-300 hover:scale-[1.02]">
        

        <div className="text-6xl mb-4 select-none">
          📡
        </div>
        

        <h2 className="text-2xl font-black text-slate-300 mb-2 uppercase tracking-wide">
          No Live Session
        </h2>
        

        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-950 border border-slate-800 rounded-full text-xs font-bold text-slate-500 mb-5">
          <span className="w-2 h-2 rounded-full bg-slate-600 animate-pulse"></span>
          OFFLINE
        </div>
        

        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          There are no live coding lectures Today streaming right now. Check your batch schedule dashboard or community channel for timings.
        </p>


        <button className="w-full bg-green-500 hover:bg-green-600 text-slate-950 font-bold py-2.5 rounded-lg text-xs tracking-wider uppercase transition-all duration-300 shadow-md shadow-green-500/10">
          📅 View Schedule
        </button>

      </div>

    </div>
  );
}

export default LiveSession;


