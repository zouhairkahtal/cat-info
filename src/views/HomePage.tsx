import DogImage from "../assets/HomePageImage/HomePageDog.png";
import CatImage from "../assets/HomePageImage/HomePageCat.png";

import { Nav } from "../components/nav";

export function HomePage() {
  return (
    <>
      {/* <button className="bg-red-300">
        <NavLink to={"/Gallery"}>cat image</NavLink>
      </button> */}

      <div
        className="w-full h-screen  
      flex min-h-[900px]  overflow-hidden"
      >
        <div className="absolute  w-full h-24">
          <Nav />
        </div>
        <div className="w-6/12 h-full bg-orange-900 flex items-center justify-center pt-20">
          <div className=" max-w-[600px] w-8/12 h-[700px]">
            <div className="w-full h-3/6  flex items-center justify-center ">
              <img src={DogImage} alt="DogImage" />
            </div>
            <div className="w-full h-3/6  text-center py-5">
              <h1 className="text-3xl font-semibold text-white ">
                Dog World
              </h1>

              <p className="text-base text-white font-extralight mb-5">
                Dogs are loyal and loving companions known for their
                intelligence, energy, and strong bond with humans. They come in
                many breeds, each with unique traits
              </p>
              <button className="py-2 px-5 bg-orange-400 rounded-full font-medium text-orange-900 ease-out duration-300 border border-orange-400  hover:bg-orange-900 hover:text-orange-400 hover:scale-110 ">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="h-full w-6 bg-gradient-to-r from-orange-900 to-orange-400"></div>
        <div className="w-6/12 h-full bg-orange-400 flex items-center justify-center pt-20">
         <div className=" max-w-[600px] w-8/12 h-[700px]">
            <div className="w-full h-3/6  flex items-center justify-center ">
              <img src={CatImage} alt="catImage" className="min-w-96 max-w-96" />
            </div>
            <div className="w-full h-3/6  text-center py-5">
              <h1 className="text-3xl font-semibold text-white ">
               Cat World
              </h1>

              <p className="text-base text-white font-extralight mb-5">
              Cats are graceful and independent animals known for their curiosity, elegance, and calm nature. They can be both playful and mysterious, bringing warmth and charm to any home
              </p>
              <button className="py-2 px-5 bg-orange-900 rounded-full font-medium text-orange-400 ease-out duration-300 border border-orange-900  hover:bg-orange-400 hover:text-orange-900 hover:scale-110 ">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
