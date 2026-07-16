
import axios from "axios";
import { useState, useEffect } from "react";

function Courses() {
  const defaultStyles = 'bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-green-500/50 shadow-sm hover:shadow-green-500/10 transition-all duration-500 hover:scale-105 cursor-pointer backdrop-blur-sm group';

  const [chnage, setChange] = useState(defaultStyles);
  const [courses, setCourses] = useState([]); // API data store karne ke liye state



  const getData = async () => {
    const response = await axios.get("https://6a585dd1914a025dcff3dc84.mockapi.io/Course");

    setCourses(response.data);
  }

  useEffect(() => {
    getData();

  }, [])





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
        {courses.map((course, index) => {
         
          const titleText = (course.title || "").toLowerCase();
          let currentIcon = course.icon; 

          if (!currentIcon) {
            if (titleText.includes("mern") || titleText.includes("web") || titleText.includes("stack")) {
              currentIcon = "🌐";
            } else if (titleText.includes("flutter")) {
              currentIcon = "📱";
            } else if (titleText.includes("android") || titleText.includes("kotlin")) {
              currentIcon = "🤖";
            } else if (titleText.includes("ai") || titleText.includes("ml") || titleText.includes("machine") || titleText.includes("intelligence")) {
              currentIcon = "🧠";
            } else if (titleText.includes("java")) {
              currentIcon = "☕";
            } else if (titleText.includes("python") || titleText.includes("data")) {
              currentIcon = "📊";
            } else {
              currentIcon = "💻"; 
            }
          }

          return (
            <div
              key={course.id || index}
              onClick={() => setChange("bg-gradient-to-br from-cyan-950/80 to-slate-900 border border-cyan-500/40 p-6 rounded-xl transition-all duration-500 shadow-xl shadow-cyan-500/20 scale-105 cursor-pointer")}
              onDoubleClick={() => setChange(defaultStyles)}
              className={chnage}
            >
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-cyan-500/10 backdrop-blur-sm cursor-pointer group">
                <div className="text-3xl mb-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                  {currentIcon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">
                  {course.description}
                </p>
                <p className="text-xs text-cyan-400 font-semibold mt-4 tracking-wider uppercase">
                  ⏱%EF%B8%8F Duration: {course.duration}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;






