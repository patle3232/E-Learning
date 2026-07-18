import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Courses() {
  const [activeCardId, setActiveCardId] = useState(null);
  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();


  const fetchCoursesData = async () => {
    try {
      const response = await axios.get("https://6a585dd1914a025dcff3dc84.mockapi.io/course");
      if (response.data && Array.isArray(response.data)) {
        setCourses(response.data);
      }
    } catch (error) {
      console.log("Data fetch karne mein error aaya:", error);
    }
  };

  useEffect(() => {
    fetchCoursesData();
  }, []);

  const handleCardClick = (id) => {
  setActiveCardId(id); 
    navigate(`/course/${id}`); 
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen p-6 flex flex-col items-center relative">


        <div 
        className="absolute inset-0 bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none"
        style={{ 
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D')` 
        }}
      ></div>



      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Header Text */}
      <div className="text-center mb-10 relative z-10">
        <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent mb-2 uppercase tracking-wide"> Our Courses 🎓 </h2>
        <p className="text-slate-400 text-sm font-medium tracking-wide">Simple and high-quality tech training programs</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl relative z-10">
        {courses.map((course) => {
          const isActive = activeCardId === course.id;

          return (
            <div
              key={course.id}
              onClick={() => handleCardClick(course.id)}
              className={
                isActive
                  ? "bg-gradient-to-br from-cyan-950/80 to-slate-900 border border-cyan-500/40 p-6 rounded-xl transition-all duration-500 shadow-xl shadow-cyan-500/20 scale-105 cursor-pointer"
                  : "bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-green-500/50 shadow-sm hover:shadow-green-500/10 transition-all duration-500 hover:scale-105 cursor-pointer backdrop-blur-sm group"
              }
            >
              {/* Double Border Layer Design */}
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-cyan-500/10 backdrop-blur-sm cursor-pointer group flex flex-col items-start">

                {/* 🌟 3D Image Rendering Block (Ab image 100% chalegi) */}
                <img
                  src={course.icon || "https://unsplash.com"}
                  alt={course.title}
                  className="w-100 h-50 object-cover rounded-xl mb-4 shadow-lg border border-slate-700/60 transition-transform duration-300 group-hover:rotate-6"
                />

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors"> {course.title} </h3>
                <p className="text-slate-400 text-sm mt-1.5 leading-relaxed"> {course.description} </p>
                <p className="text-xs text-cyan-400 font-semibold mt-4 tracking-wider uppercase"> ⏱️ Duration: {course.duration} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;






