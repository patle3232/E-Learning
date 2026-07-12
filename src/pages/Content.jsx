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

import { useState, useEffect } from 'react';

function Content() {
  const [cardColor, setCardColor] = useState('bg-slate-900 border-slate-800');
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      setCardColor('bg-emerald-950/60 border-emerald-500/50 shadow-emerald-500/10');
    } else {
      setCardColor('bg-slate-900 border-slate-800 shadow-black');
    }
  }, [isClicked]);

  return (
    <div className="bg-slate-950 text-white min-h-screen p-6 flex flex-col items-center justify-center">
      
      <div 
        onClick={() => setIsClicked(!isClicked)}
        className={`border p-10 rounded-2xl shadow-2xl w-full max-w-md text-center transition-all duration-500 cursor-pointer hover:scale-[1.02] ${cardColor}`}
      >
        
        <div className="text-6xl mb-4 animate-pulse select-none">
          📂
        </div>
        
        <h2 className={`text-2xl font-black mb-2 uppercase tracking-wide transition-colors duration-500 ${
          isClicked ? 'text-emerald-400' : 'text-green-400'
        }`}>
          {isClicked ? 'Loading Content...' : 'No Content Found'}
        </h2>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {isClicked 
            ? 'Fetching premium study materials from our cloud storage. Please wait a moment!' 
            : 'We are currently updating our database with fresh study materials and code repositories. Please check back later!'}
        </p>

        <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800 mb-6">
          <div className={`h-full rounded-full animate-pulse transition-all duration-500 ${
            isClicked ? 'bg-emerald-400 w-2/3' : 'bg-green-500 w-1/3'
          }`}></div>
        </div>

        <button className={`w-full bg-slate-950 border text-slate-300 font-bold py-2.5 rounded-lg text-xs tracking-wider uppercase transition-all duration-300 ${
          isClicked ? 'border-emerald-500/30 hover:bg-emerald-900/20' : 'border-slate-800 hover:bg-slate-800'
        }`}>
          {isClicked ? '🔄 Checking...' : '🔄 Refresh Page'}
        </button>

      </div>

    </div>
  );
}

export default Content;
