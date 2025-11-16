

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import dogLoading from "../../public/icon/dogLoawding.svg";
import dogAdd from "../../public/icon/CatAdd.svg";

export function DogGallery(){
  const [count, setCount] = useState(20);
  const [selecteddog, setSelecteddog] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const increment = () => {
    setCount((item) => item + 20);
    refetch();
  };

  const apiKey =
    "live_9Ao3nmICK2k2o1c2zTTM2Hm84lXCTyKZQQ2dN2Y2YMILCux3rLsdtehQvOX48sv5";

  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["dog", count],
    queryFn: async () => {
      const res = await fetch(
        `https://api.thedogapi.com/v1/images/search?limit=${count}`,
        {
          headers: { "x-api-key": apiKey },
        }
      );
      return res.json();
    },
  });

  if (isLoading)
    return (
      <div className=" select-none w-full h-full flex items-center justify-center">
        <img className="animate-spin " src={dogLoading} alt={"loading"} />
      </div>
    );
  if (error)
    return <p className="text-center mt-10">Something went wrong 🐶</p>;

  return (
    <>
      <div className="relative p-10">
        {/* ADD BUTTON */}
        <button
          onClick={increment}
          disabled={isFetching}
          className="fixed z-50 top-6 right-6 bg-red-500 text-white font-semibold p-2 rounded-full shadow-lg hover:bg-red-700 transition disabled:opacity-50"
        >
          {isFetching ? "Loading..." : <img className="w-5" src={dogAdd} alt="add" />}
        </button>

        {/* GALLERY */}
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-5">
          {data?.map((dog: any) => (
            <img
              key={dog.id}
              src={dog.url}
              alt="dog"
              onClick={() => {
                setSelecteddog(dog.url);
                setPopupVisible(true);
              }}
              className="cursor-pointer rounded-lg shadow-lg aspect-auto my-5 hover:scale-105 transition-transform"
            />
          ))}
        </div>

        {/* POPUP */}
        {popupVisible && (
          <div
            onClick={() => setPopupVisible(false)}
            className="fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <img
              src={selecteddog!}
              alt="dog"
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl"
            />
            
          </div>
        )}
      </div>
    </>
  );
}
