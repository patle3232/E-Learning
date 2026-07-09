
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div  className="flex justify-around bg-black text-white h-100 w-100% items-center text-2xl m-5 rounded-lg">
      <h1>404</h1>
      <h2>Page Not Found</h2>
     


      <Link to="/">Go Back Home</Link>
    </div>
  );
}


export default  NotFound;
