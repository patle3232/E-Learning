
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function CourseDetail() {
   const navigate = useNavigate();
   const { id } = useParams();

   const [course, setCourse] = useState(null);
   const [loading, setLoading] = useState(true);

   const fetchSingleCourse = async () => {
      try {
         setLoading(true);


         const response = await axios.get("https://6a585dd1914a025dcff3dc84.mockapi.io/course");

         if (response.data && Array.isArray(response.data)) {

            const matchedCourse = response.data.find(item => String(item.id) === String(id));

            if (matchedCourse) {
               setCourse(matchedCourse);
            }
         }
      } catch (error) {
         console.log("Data rendering problem:", error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchSingleCourse();
   }, [id]);

   if (loading) {
      return (
         <div className="bg-slate-950 text-white min-h-screen flex items-center justify-center">
            <p className="text-xl font-bold animate-pulse text-cyan-400">Loading Course Details...</p>
         </div>
      );
   }

   if (!course) {
      return (
         <div className="bg-slate-950 text-white min-h-screen flex flex-col items-center justify-center text-center p-6">
            <p className="text-xl font-bold text-red-500 mb-2">⚠️ Course Not Found</p>
            <button onClick={() => navigate(-1)} className="px-6 py-2.5 bg-slate-800 rounded-lg">Go Back</button>
         </div>
      );
   }

   return (
      <div className="bg-slate-950 text-white min-h-screen p-10 flex flex-col items-center justify-center relative overflow-hidden">

         <div
            className="absolute inset-0 bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: `url('https://unsplash.com')` }}
         ></div>

         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>

         {/* Main Container Panel */}
         <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl max-w-xl w-full relative z-10 shadow-2xl backdrop-blur-md">

            {/* API Dynamic Icon */}
            <img
               src={course.icon || "https://unsplash.com"}
               alt={course.title}
               className="w-24 h-24 object-cover rounded-2xl mx-auto mb-6 shadow-xl border border-slate-700"
            />

            {/* API Dynamic ID Display */}
            <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
               Course ID: {course.id} — {course.duration}
            </span>

            {/* API Dynamic Title */}
            <h1 className="text-3xl font-black text-white mt-3 mb-4 bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">
               {course.title}
            </h1>

            {/* API Dynamic Description */}
            <p className="text-slate-400 text-base leading-relaxed mb-6">
               {course.description}
            </p>

            {/* Footer info panel */}
            <div className="flex items-center justify-between border-t border-slate-800 pt-6 mt-6">
               <div>
                  <p className="text-xs text-slate-500 text-left uppercase font-semibold">Course Fees</p>
                  <p className="text-2xl font-black text-emerald-400">₹{course.price || "4,999"}</p>
               </div>

               <button
                  onClick={() => navigate(-1)}
                  className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-emerald-600 text-slate-950 font-black text-xs uppercase rounded-lg cursor-pointer hover:scale-105 transition-all shadow-md"
               >
                  ⬅️ Go Back
               </button>
            </div>

         </div>
      </div>
   );
}

export default CourseDetail;

