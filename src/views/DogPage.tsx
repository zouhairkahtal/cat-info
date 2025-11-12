import { NavLink } from "react-router-dom";
import DogPageImage from "../assets/DogPage/DogPageImage.png";
import GoBack from "../assets/icon's/back.svg";

export function DogPage() {
  return (
    <>
      <div
        className="w-full h-screen min-h-[900px] bg-white bg-no-repeat bg-right-bottom bg-contain flex items-center justify-start max-[500px]:items-start"
        style={{ backgroundImage: `url(${DogPageImage})` }}
      >
        <button className="absolute top-5 left-4">
          <NavLink to={"/HomePage"}>
            <img className="w-10" src={GoBack} alt={GoBack} />
          </NavLink>
        </button>
        <div className="w-[600px] h-[500px] bg-red-500 text-white flex flex-col justify-center items-start p-10 rounded-r-3xl shadow-lg max-[1175px]:shadow-none max-[1175px]:bg-opacity-40 max-[1175px]:bg-white  max-[400px]:bg-transparent ">
          <h2 className="text-4xl font-bold mb-4 max-[1175px]:text-red-500 ">
            Dogs Can Smell Time!
          </h2>
          <p className="text-lg mb-8 leading-relaxed max-[1175px]:text-red-500">
            Dogs have an incredible sense of smell they can actually detect the
            passing of time by noticing how scents in the air change throughout
            the day.
          </p>

          <button className="bg-white border border-white hover:text-white  text-red-500 font-semibold px-6 py-3 rounded-lg hover:bg-red-500 transition-all duration-200 max-[1175px]:hover:bg-transparent max-[1175px]:hover:text-red-500 max-[1175px]:bg-transparent max-[1175px]:hover:border-red-500 max-[1175px]:border-red-300 max-[1175px]:hover:border-2">
            Info →
          </button>
        </div>
      </div>
    </>
  );
}
