import DogImage from "../assets/HomePageImage/HomePageDog.png";
import CatImage from "../assets/HomePageImage/HomePageCat.png";

import { Nav } from "../components/nav";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

export function HomePage() {
  return (
    <>
      {/* <button className="bg-red-300">
        <NavLink to={"/Gallery"}>cat image</NavLink>
      </button> */}

      <div
        className="w-full h-screen  
      flex min-h-[900px]  overflow-hidden max-[650px]:flex-col max-[650px]:min-h-[1700px] "
      >
        <div className="absolute  w-full h-24 ">
          <Nav />
        </div>
        <div className="w-6/12 h-full bg-orange-900 flex items-center justify-center pt-20 max-[650px]:pt-2   max-[650px]:w-full ">
          <motion.div  initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:1,ease:"easeInOut",delay:0.2}} className=" max-w-[600px] max-[650px]:w-full max-[650px]:px-4 w-8/12 h-[700px]  max-[650px]:pt-20 ">
            <div className="w-full h-3/6  flex items-center justify-center  select-none">
              <img src={DogImage} alt="DogImage" />
            </div>
            <div className="w-full h-3/6  text-center py-5">
              <h1 className="text-3xl font-semibold text-white ">Dog World</h1>

              <p className="text-base text-white font-extralight mb-5">
                Dogs are loyal and loving companions known for their
                intelligence, energy, and strong bond with humans. They come in
                many breeds, each with unique traits
              </p>
              <NavLink to={"/DogPage"}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="py-2 px-5 bg-orange-400 rounded-full font-medium text-orange-900 ease-out duration-300 border border-orange-400  hover:bg-orange-900 hover:text-orange-400 hover:scale-110 "
                >
                  Read More
                </motion.button>
              </NavLink>

              <div className="hidden max-[650px]:flex  h-36 w-full items-center justify-center gap-5">
                <NavLink to={"/DogInfo"}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-orange-400 bg-orange-900 text-orange-400 py-2 px-8 rounded-full text-lg font-semibold  hover:scale-105 ease-out duration-300 "
                  >
                    Info
                  </motion.button>
                </NavLink>

                <NavLink to={"/DogGallery"}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-orange-400 bg-orange-900  text-orange-400 py-2 px-8 rounded-full text-lg font-semibold  hover:scale-105 ease-out duration-300 "
                  >
                    Gallery
                  </motion.button>
                </NavLink>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="h-full w-6 bg-gradient-to-r max-[650px]:bg-gradient-to-b from-orange-900 to-orange-400 max-[650px]:w-full "></div>

        <div className=" w-6/12 h-full bg-orange-400 flex items-center justify-center pt-20 max-[650px]:pt-2 max-[650px]:w-full">


          <motion.div  initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:1,ease:"easeInOut",delay:0.2}} className=" max-w-[600px] w-8/12 h-[700px] max-[650px]:w-full max-[650px]:px-4  ">
            <div className="w-full h-3/6  flex items-center justify-center select-none ">
              <img
                src={CatImage}
                alt="catImage"
                className="min-w-96 max-w-96"
              />
            </div>




            <div className="w-full h-3/6  text-center py-5">
              <h1 className="text-3xl font-semibold text-white ">Cat World</h1>

              <p className="text-base text-white font-extralight mb-5">
                Cats are graceful and independent animals known for their
                curiosity, elegance, and calm nature. They can be both playful
                and mysterious, bringing warmth and charm to any home
              </p>
              <NavLink to={"/CatPage"}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="py-2 px-5 bg-orange-900 rounded-full font-medium text-orange-400 ease-out duration-300 border border-orange-900  hover:bg-orange-400 hover:text-orange-900 hover:scale-110 "
                >
                  Read More
                </motion.button>
              </NavLink>

              <div className="hidden max-[650px]:flex  h-36 w-full items-center justify-center gap-5 ">
                <NavLink to={"/CatInfo"}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-orange-900 bg-orange-400 text-orange-900 py-2 px-8 rounded-full text-lg font-semibold  hover:scale-105 ease-out duration-300 "
                  >
                    Info
                  </motion.button>
                </NavLink>
                <NavLink to={"/Gallery"}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-orange-900 bg-orange-400  text-orange-900 py-2 px-8 rounded-full text-lg font-semibold  hover:scale-105 ease-out duration-300 "
                  >
                    Gallery
                  </motion.button>
                </NavLink>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
