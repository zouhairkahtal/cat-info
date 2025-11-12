import { NavLink } from "react-router-dom";

export function Nav(){


    return(

    <>
    <ul className="flex justify-around max-[650px]:justify-center items-center w-full h-full ">
        
<li className="backdrop-brightness-90 text-white py-2 px-8 rounded-full text-lg font-semibold  hover:scale-105 ease-out duration-300 max-[650px]:hidden">Info</li>
<li className="backdrop-brightness-90  text-white py-2 px-8 rounded-full text-lg font-semibold  hover:scale-105 ease-out duration-300 max-[650px]:hidden">Gallery</li>
<li className="backdrop-brightness-90  text-white py-2 px-10 rounded-full text-lg font-semibold  hover:scale-105 ease-out duration-300 ">Dog & Cat</li>
    <NavLink to={"/Gallery"} className={`ease-out duration-300`}>
<li className="backdrop-brightness-90  text-white py-2 px-8 rounded-full text-lg font-semibold  hover:scale-105 ease-out duration-300 max-[650px]:hidden">

    Gallery
    </li>
    </NavLink>
<li className="backdrop-brightness-90  text-white py-2 px-8 rounded-full text-lg font-semibold  hover:scale-105 ease-out duration-300 max-[650px]:hidden">Info</li>
    </ul>
    </>
    )
}