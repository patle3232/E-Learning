
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//    return (
//       <nav className='flex bg-slate-900 h-18 w-screen justify-around items-center gap-5  shadow-lg shadow-red-500'>
//          <h2 className='font-bold text-center text-blue-500 text-2xl'>🎓 SkillUp</h2>
//          <div>
//             <Link to="/" className='h-5 w-5 border-2 border-blue-500 p-1.5 px-3 rounded-full text-gray-300  hover:-translate-y-0.5  hover:bg-blue-500 hover:scale-105 hover:text-white transition-all duration-500 m-5 font-bold  '>📊 Home</Link>

//                         <Link to="/about" className='h-5 w-5 border-2 border-blue-500 p-1.5 px-3 rounded-full text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300 m-5  font-bold'> About Us 💡</Link>
//             <Link to="/courses" className='h-5 w-5 border-2 border-blue-500 p-1.5 px-3 rounded-full text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300 m-5 font-bold'> Courses 📚</Link>

//             <Link to="/Cnt" className='h-5 w-5 border-2 border-blue-500 p-1.5 px-3 rounded-full text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300 m-5  font-bold'> Content 💡</Link>
           
//             <Link to="/LL" className='h-5 w-5 border-2 border-blue-500 p-1.5 px-3 rounded-full text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300 m-5 font-bold'> Live 📢</Link>
//          </div>
//       </nav>
//    );
// }








import { Link } from 'react-router-dom'; 

export default function Navbar() { 
  return ( 
    // 🌟 fixed top-0 aur backdrop-blur lga kar isko glassy aur floating banaya h
    <nav className='fixed top-0 left-0 w-screen h-20 bg-slate-950/40 backdrop-blur-xl border-b border-slate-900 flex justify-around items-center z-50 transition-all duration-300 shadow-2xl' > 
      
      {/* 🎓 Premium Gradient Branding Logo */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-emerald-500 flex items-center justify-center font-black text-sm text-slate-950 shadow-lg shadow-cyan-500/20">
          SU
        </div>
        <h2 className='font-black tracking-wider text-white text-2xl group-hover:brightness-110 transition-all'>
          Skill<span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent font-black">Up</span>
        </h2>
      </div>

      {/* Sleek Navigation Interfaces links list */}
      <div className="flex items-center gap-2"> 
        <Link 
          to="/" 
          className='text-xs font-black uppercase tracking-wider text-slate-300 border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm px-4 py-2.5 rounded-xl hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-0.5 hover:text-white transition-all duration-300 mx-2'
        >
          📊 Home
        </Link> 
        
        <Link 
          to="/about" 
          className='text-xs font-black uppercase tracking-wider text-slate-300 border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm px-4 py-2.5 rounded-xl hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-0.5 hover:text-white transition-all duration-300 mx-2'
        >
          About Us 💡
        </Link> 
        
        <Link 
          to="/courses" 
          className='text-xs font-black uppercase tracking-wider text-slate-300 border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm px-4 py-2.5 rounded-xl hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-0.5 hover:text-white transition-all duration-300 mx-2'
        >
          Courses 📚
        </Link> 
        
        <Link 
          to="/Cnt" 
          className='text-xs font-black uppercase tracking-wider text-slate-300 border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm px-4 py-2.5 rounded-xl hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-0.5 hover:text-white transition-all duration-300 mx-2'
        >
          Content 💡
        </Link> 
        
        <Link 
          to="/LL" 
          className='text-xs font-black uppercase tracking-wider text-slate-300 border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm px-4 py-2.5 rounded-xl hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-0.5 hover:text-white transition-all duration-300 mx-2'
        >
          Live 📢
        </Link> 
      </div> 
    </nav> 
  ); 
}


