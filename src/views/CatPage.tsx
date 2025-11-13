import { NavLink } from "react-router-dom";
import DogPageImage from "../assets/CatPageImage/CatPageImage.png";
import GoBack from "../assets/icon/back-buttons-orange.svg";

export function CatPage() {
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
        <div className="w-[600px] h-[500px] bg-orange-500 text-white flex flex-col justify-center items-start p-10 rounded-r-3xl shadow-lg max-[1175px]:shadow-none max-[1175px]:bg-opacity-40 max-[1175px]:bg-white  max-[400px]:bg-transparent ">
          <h2 className="text-4xl font-bold mb-4 max-[1175px]:text-orange-500 ">
            Cats Recognize Their Own Names!
          </h2>
          <p className="text-lg mb-8 leading-relaxed max-[1175px]:text-orange-500">
            Cats may act mysterious, but they actually recognize their own names
             they often just choose to ignore you when you call them!
          </p>

          <button className="bg-white border border-white hover:text-white  text-orange-500 font-semibold px-6 py-3 rounded-lg hover:bg-orange-500 transition-all duration-200 max-[1175px]:hover:bg-transparent max-[1175px]:hover:text-orange-500 max-[1175px]:bg-transparent max-[1175px]:hover:border-orange-500 max-[1175px]:border-orange-300 max-[1175px]:hover:border-2">
            Info →
          </button>
        </div>
      </div>
    </>
  );
}
