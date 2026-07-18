import React from 'react';

function About() {
  return (
    <div className="bg-slate-950 text-white min-h-screen p-6 flex flex-col items-center justify-center relative overflow-hidden select-none">
      
      {/* 🌟 1. Best Opacity High-Tech Background Image Underlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none z-0"
        style={{ backgroundImage: `url('https://unsplash.com')` }}
      ></div>

      {/* 2. Cyber Plasma Neon Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[200px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none z-0"></div>

      {/* 🌟 3. Main Glassmorphic Display Core Card Panel */}
      <div className="border border-slate-800/80 bg-slate-900/40 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-2xl max-w-2xl w-full relative z-10 text-center transition-all duration-500 hover:border-cyan-500/30 hover:shadow-cyan-500/5 hover:scale-[1.02] group">
        
        {/* Header Text - Cyan Emerald Mesh Gradient */}
        <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent mb-3 tracking-wide uppercase">
          About <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Us 🎓</span>
        </h2>

        {/* High-Contrast Info Subtext */}
        <p className="text-lg md:text-xl text-slate-300 mb-8 font-medium leading-relaxed max-w-lg mx-auto">
          We provide world-class coding education in <span className="text-cyan-400 font-bold">Maharashtra</span> to build your deployment pipelines.
        </p>

        {/* 🌟 4. Re-designed Feature Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          
          {/* Feature Block 1 */}
          <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-900 shadow-inner flex gap-4 items-start transition-all duration-300 hover:border-cyan-500/20 hover:scale-[1.02]">
            <span className="text-2xl mt-0.5 filter drop-shadow-[0_4px_8px_rgba(6,182,212,0.3)]">📊</span>
            <div>
              <h4 className="text-sm font-extrabold text-cyan-400 uppercase tracking-wider mb-1">Performance</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">Weekly mock tests and absolute real-time progress tracking.</p>
            </div>
          </div>

          {/* Feature Block 2 */}
          <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-900 shadow-inner flex gap-4 items-start transition-all duration-300 hover:border-emerald-500/20 hover:scale-[1.02]">
            <span className="text-2xl mt-0.5 filter drop-shadow-[0_4px_8px_rgba(16,185,129,0.3)]">🏆</span>
            <div>
              <h4 className="text-sm font-extrabold text-emerald-400 uppercase tracking-wider mb-1">Results</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">100% production level, real-world project based coding learning.</p>
            </div>
          </div>

          {/* Feature Block 3 */}
          <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-900 shadow-inner flex gap-4 items-start transition-all duration-300 hover:border-emerald-500/20 hover:scale-[1.02]">
            <span className="text-2xl mt-0.5 filter drop-shadow-[0_4px_8px_rgba(16,185,129,0.3)]">💰</span>
            <div>
              <h4 className="text-sm font-extrabold text-emerald-400 uppercase tracking-wider mb-1">Fee & Guarantee</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">Highly affordable fee brackets backed with a 7-day trial loop.</p>
            </div>
          </div>

          {/* Feature Block 4 */}
          <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-900 shadow-inner flex gap-4 items-start transition-all duration-300 hover:border-cyan-500/20 hover:scale-[1.02]">
            <span className="text-2xl mt-0.5 filter drop-shadow-[0_4px_8px_rgba(6,182,212,0.3)]">🔄</span>
            <div>
              <h4 className="text-sm font-extrabold text-cyan-400 uppercase tracking-wider mb-1">Teaching Flow</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">Deep algorithmic logic building first, followed by modern MERN stack.</p>
            </div>
          </div>

        </div>
      </div> {/* 🌟 Extra closing tag fixed here! */}
    </div>
  );
}

export default About;
