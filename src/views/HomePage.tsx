// import { NavLink } from "react-router";
import { Nav } from "../components/nav";

export function HomePage() {
  return (
    <>
      {/* <button className="bg-red-300">
        <NavLink to={"/Gallery"}>cat image</NavLink>
      </button> */}


      <div className="w-full h-screen  
      flex ">
        <div className="absolute  w-full h-24">
          <Nav/>
        </div>
<div className="w-6/12 h-full bg-orange-900">

</div>
<div className="h-full w-6 bg-gradient-to-r from-orange-900 to-orange-400"></div>
<div className="w-6/12 h-full bg-orange-400"></div>
      </div>
    </>
  );
}
