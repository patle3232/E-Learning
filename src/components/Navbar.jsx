
import { Link } from 'react-router-dom';

export default function Navbar() {
   return (
      <nav className='flex bg-slate-900 h-18 w-screen justify-around items-center gap-5  shadow-lg shadow-red-500'>
         <h2 className='font-bold text-center text-blue-500 text-2xl'>🎓 SkillUp</h2>
         <div>
            <Link to="/Home" className='h-5 w-5 border-2 border-blue-500 p-1.5 px-3 rounded-full text-gray-300  hover:-translate-y-0.5  hover:bg-blue-500 hover:scale-105 hover:text-white transition-all duration-500 m-5 font-bold  '>📊 Home</Link>

                        <Link to="/about" className='h-5 w-5 border-2 border-blue-500 p-1.5 px-3 rounded-full text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300 m-5  font-bold'> About Us 💡</Link>
            <Link to="/courses" className='h-5 w-5 border-2 border-blue-500 p-1.5 px-3 rounded-full text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300 m-5 font-bold'> Courses 📚</Link>

            <Link to="/Cnt" className='h-5 w-5 border-2 border-blue-500 p-1.5 px-3 rounded-full text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300 m-5  font-bold'> Content 💡</Link>
           
            <Link to="/LL" className='h-5 w-5 border-2 border-blue-500 p-1.5 px-3 rounded-full text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300 m-5 font-bold'> Live 📢</Link>
         </div>
      </nav>
   );
}

