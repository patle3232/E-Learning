









// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// export default function Home() {
//   // Ultra-Premium Cyberpunk neon matrix palette
//   const [activeTheme, setActiveTheme] = useState({
//     bgGradient: 'from-amber-400 via-rose-500 to-violet-600', 
//     primaryGlow: 'rgba(244, 63, 94, 0.25)',     // Rose base lighting
//     secondaryGlow: 'rgba(124, 58, 237, 0.25)',  // Violet lighting
//     name: 'Sunset Horizon'
//   });

//   const themes = [
//     { 
//       name: 'Sunset Horizon', 
//       bgGradient: 'from-amber-400 via-rose-500 to-violet-600', 
//       primaryGlow: 'rgba(244, 63, 94, 0.25)', 
//       secondaryGlow: 'rgba(124, 58, 237, 0.25)' 
//     },
//     { 
//       name: 'Aurora Borealis', 
//       bgGradient: 'from-emerald-400 via-cyan-500 to-blue-600', 
//       primaryGlow: 'rgba(6, 182, 212, 0.25)', 
//       secondaryGlow: 'rgba(59, 130, 246, 0.25)' 
//     },
//     { 
//       name: 'Cyber Quantum', 
//       bgGradient: 'from-fuchsia-500 via-purple-600 to-indigo-700', 
//       primaryGlow: 'rgba(217, 70, 239, 0.25)', 
//       secondaryGlow: 'rgba(79, 70, 229, 0.25)' 
//     },
//     { 
//       name: 'Toxic Flare', 
//       bgGradient: 'from-lime-400 via-emerald-500 to-teal-600', 
//       primaryGlow: 'rgba(16, 185, 129, 0.25)', 
//       secondaryGlow: 'rgba(20, 184, 166, 0.25)' 
//     }
//   ];

//   // Structural Stagger Loading Configuration
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 25, filter: 'blur(4px)' },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       filter: 'blur(0px)',
//       transition: { type: 'spring', stiffness: 100, damping: 14 } 
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col justify-center items-center text-center p-6 relative overflow-hidden select-none">
      
//       {/* 🌌 DYNAMIC BACKGROUND INTERACTION LAYER: Living Plasma Aura */}
//       <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-60">
        
//         {/* Dynamic Blobs Alpha Node */}
//         <motion.div 
//           animate={{
//             x: [0, 90, -50, 0],
//             y: [0, -70, 60, 0],
//             scale: [1, 1.25, 0.9, 1]
//           }}
//           style={{ backgroundColor: activeTheme.primaryGlow, transition: 'background-color 1s ease-in-out' }}
//           transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-[10%] left-[15%] w-80 md:w-[500px] h-80 md:h-[500px] rounded-full blur-[110px]"
//         />

//         {/* Dynamic Blobs Beta Node */}
//         <motion.div 
//           animate={{
//             x: [0, -80, 60, 0],
//             y: [0, 80, -60, 0],
//             scale: [1, 0.85, 1.2, 1]
//           }}
//           style={{ backgroundColor: activeTheme.secondaryGlow, transition: 'background-color 1s ease-in-out' }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute bottom-[10%] right-[15%] w-96 md:w-[550px] h-96 md:h-[550px] rounded-full blur-[130px]"
//         />
//       </div>

//       {/* 🌟 CORE CONTENT WRAPPER */}
//       <motion.div 
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative z-10 flex flex-col items-center max-w-5xl w-full py-12"
//       >
        
//         {/* Shimmer Border Top Tag */}
//         <motion.span 
//           variants={itemVariants}
//           whileHover={{ scale: 1.04 }}
//           className="text-xs font-bold tracking-widest text-slate-300 uppercase bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-full mb-8 inline-flex items-center gap-2 shadow-2xl backdrop-blur-md cursor-pointer hover:border-rose-500/30 transition-colors"
//         >
//           <span className="relative flex h-2 w-2">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
//           </span>
//           Next-Gen Technical Learning Platform
//         </motion.span>

//         {/* Cinematic Heading Matrix */}
//         <motion.h1 
//           variants={itemVariants}
//           className="text-5xl md:text-7xl font-black tracking-tight text-white max-w-4xl leading-[1.1] drop-shadow-2xl"
//         >
//           Master Modern Coding Skills with{" "}
//           <span className={`bg-gradient-to-r bg-clip-text text-transparent transition-all duration-1000 ease-in-out font-black ${activeTheme.bgGradient}`}>
//             SkillUp
//           </span>{" "}
//           ⚛️
//         </motion.h1>

//         {/* High-Contrast Description Subtext */}
//         <motion.p 
//           variants={itemVariants}
//           className="text-base md:text-xl font-medium text-slate-400 mt-6 max-w-2xl leading-relaxed"
//         >
//           Build high-performance web applications using React, Tailwind CSS, and advanced backend systems. Start your deployment pipeline today. 🚀
//         </motion.p>

//         {/* Primary CTA Dashboard Interfaces with Elastic Physics */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex gap-4 mt-10 flex-wrap justify-center items-center"
//         >
//           <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
//             <Link 
//               to="/courses" 
//               className="px-8 py-4 bg-gradient-to-r from-rose-600 to-violet-600 text-white font-extrabold text-base rounded-xl transition-all inline-block shadow-xl shadow-rose-500/20 hover:shadow-violet-500/30 hover:brightness-110"
//             >
//               Explore Courses 🛠️
//             </Link>
//           </motion.div>

//           <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
//             <Link 
//               to="/about" 
//               className="px-8 py-4 bg-slate-950/40 border border-slate-800 text-slate-300 font-bold text-base rounded-xl transition-all inline-block backdrop-blur-sm hover:bg-slate-900 hover:border-slate-700 hover:text-white"
//             >
//               About Platform ℹ️
//             </Link>
//           </motion.div>
//         </motion.div>

//         {/* Premium Tech Badges Section */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex gap-4 mt-16 flex-wrap justify-center items-center text-xs font-bold text-slate-500"
//         >
//           {['React Router', 'Vite Core', 'Tailwind CSS'].map((tech, i) => (
//             <motion.div 
//               key={tech}
//               whileHover={{ y: -4, scale: 1.03, color: '#ffffff', borderColor: 'rgba(244, 63, 94, 0.3)' }}
//               className="flex items-center gap-2 border border-slate-900 p-3 px-5 rounded-xl bg-slate-950/50 backdrop-blur-md cursor-pointer transition-all duration-300"
//             >
//               <span className="text-slate-400">{i === 0 ? "⚛️" : i === 1 ? "⚡" : "🛠️"}</span> {tech}
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Control Interface Grid Panel */}
//         <motion.div 
//           variants={itemVariants}
//           className="mt-16 border border-slate-900 p-4 rounded-2xl bg-slate-950/30 backdrop-blur-xl max-w-lg w-full shadow-2xl"
//         >
//           <p className="text-xs text-slate-400 font-semibold mb-3 tracking-wide">
//             SWITCH CORE AMBIENT ECOSYSTEM COLOR MATRIX:
//           </p>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
//             {themes.map((t) => (
//               <button
//                 key={t.name}
//                 onClick={() => setActiveTheme(t)}
//                 className={`text-[11px] px-2 py-2 rounded-lg border transition-all font-bold tracking-tight cursor-pointer ${
//                   activeTheme.name === t.name
//                     ? 'bg-rose-500/10 border-rose-500 text-rose-400 shadow-lg shadow-rose-500/10'
//                     : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
//                 }`}
//               >
//                 {t.name}
//               </button>
//             ))}
//           </div>
//         </motion.div>

//       </motion.div>
//     </div>
//   );
// }






import { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion'; 

export default function Home() { 
  const [activeTheme, setActiveTheme] = useState({ 
    bgGradient: 'from-amber-400 via-rose-500 to-violet-600', 
    primaryGlow: 'rgba(244, 63, 94, 0.20)', 
    secondaryGlow: 'rgba(124, 58, 237, 0.20)', 
    accentText: 'text-rose-400',
    btnHover: 'hover:shadow-rose-500/30',
    borderGlow: 'hover:border-rose-500/30',
    name: 'Sunset Horizon' 
  }); 

  const themes = [ 
    { 
      name: 'Sunset Horizon', 
      bgGradient: 'from-amber-400 via-rose-500 to-violet-600', 
      primaryGlow: 'rgba(244, 63, 94, 0.20)', 
      secondaryGlow: 'rgba(124, 58, 237, 0.20)',
      accentText: 'text-rose-400',
      btnHover: 'hover:shadow-rose-500/30',
      borderGlow: 'hover:border-rose-500/30'
    }, 
    { 
      name: 'Aurora Borealis', 
      bgGradient: 'from-emerald-400 via-cyan-500 to-blue-600', 
      primaryGlow: 'rgba(6, 182, 212, 0.20)', 
      secondaryGlow: 'rgba(59, 130, 246, 0.20)',
      accentText: 'text-cyan-400',
      btnHover: 'hover:shadow-cyan-500/30',
      borderGlow: 'hover:border-cyan-500/30'
    }, 
    { 
      name: 'Cyber Quantum', 
      bgGradient: 'from-fuchsia-500 via-purple-600 to-indigo-700', 
      primaryGlow: 'rgba(217, 70, 239, 0.20)', 
      secondaryGlow: 'rgba(79, 70, 229, 0.20)',
      accentText: 'text-fuchsia-400',
      btnHover: 'hover:shadow-fuchsia-500/30',
      borderGlow: 'hover:border-fuchsia-500/30'
    }, 
    { 
      name: 'Toxic Flare', 
      bgGradient: 'from-lime-400 via-emerald-500 to-teal-600', 
      primaryGlow: 'rgba(16, 185, 129, 0.20)', 
      secondaryGlow: 'rgba(20, 184, 166, 0.20)',
      accentText: 'text-emerald-400',
      btnHover: 'hover:shadow-emerald-500/30',
      borderGlow: 'hover:border-emerald-500/30'
    } 
  ]; 

  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } 
  }; 

  const itemVariants = { 
    hidden: { opacity: 0, y: 25, filter: 'blur(4px)' }, 
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 100, damping: 14 } } 
  }; 

  return ( 
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col justify-center items-center text-center p-6 relative overflow-hidden select-none"> 
      
      {/* 🌟 ULTRA-PREMIUM DIGITAL GRID BACKGROUND IMAGE LAYER (Perfect Opacity & Mix Blend) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.08] mix-blend-screen pointer-events-none z-1"
        style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D')` }}
      ></div>

      {/* LIVING PLASMA AURA NEON GRADIENT LIGHTS */} 
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-60"> 
        <motion.div 
          animate={{ x: [0, 90, -50, 0], y: [0, -70, 60, 0], scale: [1, 1.25, 0.9, 1] }} 
          style={{ backgroundColor: activeTheme.primaryGlow, transition: 'background-color 1s ease-in-out' }} 
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[10%] left-[15%] w-80 md:w-[500px] h-80 md:h-[500px] rounded-full blur-[110px]" 
        /> 
        <motion.div 
          animate={{ x: [0, -80, 60, 0], y: [0, 80, -60, 0], scale: [1, 0.85, 1.2, 1] }} 
          style={{ backgroundColor: activeTheme.secondaryGlow, transition: 'background-color 1s ease-in-out' }} 
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute bottom-[10%] right-[15%] w-96 md:w-[550px] h-96 md:h-[550px] rounded-full blur-[130px]" 
        /> 
      </div> 

      {/* CONTENT LAYOUT BOX */} 
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
        className="relative z-10 flex flex-col items-center max-w-5xl w-full py-12" 
      > 
        {/* Shimmering Top Pill Badge */}
        <motion.span 
          variants={itemVariants} 
          whileHover={{ scale: 1.04 }} 
          className={`text-xs font-bold tracking-widest text-slate-300 uppercase bg-slate-950/80 border border-slate-900 px-5 py-2.5 rounded-full mb-8 inline-flex items-center gap-2 shadow-2xl backdrop-blur-md cursor-pointer transition-all duration-500 ${activeTheme.borderGlow}`} 
        > 
          <span className="relative flex h-2 w-2"> 
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span> 
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span> 
          </span> 
          Next-Gen Technical Learning Platform 
        </motion.span> 

        {/* Dynamic Heading Layout */}
        <motion.h1 
          variants={itemVariants} 
          className="text-5xl md:text-7xl font-black tracking-tight text-white max-w-4xl leading-[1.1] drop-shadow-2xl" 
        > 
          Master Modern Coding Skills with{" "} 
          <span className={`bg-gradient-to-r bg-clip-text text-transparent transition-all duration-1000 ease-in-out font-black ${activeTheme.bgGradient}`}> 
            SkillUp 
          </span>{" "} 
          <span className={`transition-colors duration-500 ${activeTheme.accentText}`}>⚛️</span>
        </motion.h1> 

        {/* Subtext Description Panel */}
        <motion.p 
          variants={itemVariants} 
          className="text-base md:text-xl font-medium text-slate-400 mt-6 max-w-2xl leading-relaxed" 
        > 
          Build high-performance web applications using React, Tailwind CSS, and advanced backend systems. Start your deployment pipeline today. 🚀 
        </motion.p> 

        {/* Dynamic Primary Buttons */}
        <motion.div variants={itemVariants} className="flex gap-4 mt-10 flex-wrap justify-center items-center" > 
          <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}> 
            <Link 
              to="/courses" 
              className={`px-8 py-4 bg-gradient-to-r ${activeTheme.bgGradient} text-slate-950 font-black text-base rounded-xl transition-all duration-1000 inline-block shadow-xl ${activeTheme.btnHover} hover:brightness-110`} 
            > 
              Explore Courses 🛠️ 
            </Link> 
          </motion.div> 
          <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}> 
            <Link 
              to="/about" 
              className="px-8 py-4 bg-slate-950/40 border border-slate-800 text-slate-300 font-bold text-base rounded-xl transition-all inline-block backdrop-blur-sm hover:bg-slate-900 hover:border-slate-700 hover:text-white" 
            > 
              About Platform ℹ️ 
            </Link> 
          </motion.div> 
        </motion.div> 

        {/* Technical Component Badges */}
        <motion.div variants={itemVariants} className="flex gap-4 mt-16 flex-wrap justify-center items-center text-xs font-bold text-slate-500" > 
          {['React Router', 'Vite Core', 'Tailwind CSS'].map((tech, i) => ( 
            <motion.div 
              key={tech} 
              whileHover={{ y: -4, scale: 1.03, color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.15)' }} 
              className="flex items-center gap-2 border border-slate-900 p-3 px-5 rounded-xl bg-slate-950/50 backdrop-blur-md cursor-pointer transition-all duration-300" 
            > 
              <span className={`transition-colors duration-500 ${activeTheme.accentText}`}>{i === 0 ? "⚛️" : i === 1 ? "⚡" : "🛠️"}</span> 
              {tech} 
            </motion.div> 
          ))} 
        </motion.div> 

        {/* Ambient System Config Controller Grid */}
        <motion.div variants={itemVariants} className="mt-16 border border-slate-900 p-4 rounded-2xl bg-slate-950/30 backdrop-blur-xl max-w-lg w-full shadow-2xl" > 
          <p className="text-xs text-slate-400 font-semibold mb-3 tracking-wide"> 
            SWITCH CORE AMBIENT ECOSYSTEM COLOR MATRIX: 
          </p> 
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2"> 
            {themes.map((t) => ( 
              <button 
                key={t.name} 
                onClick={() => setActiveTheme(t)} 
                className={`text-[11px] px-2 py-2 rounded-lg border transition-all font-bold tracking-tight cursor-pointer ${ 
                  activeTheme.name === t.name 
                    ? 'bg-white/5 border-slate-400 text-white shadow-lg' 
                    : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700' 
                }`} 
              > 
                {t.name} 
              </button> 
            ))} 
          </div> 
        </motion.div> 
      </motion.div> 
    </div> 
  ); 
}
