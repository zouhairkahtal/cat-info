import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import CatLoading from "../../public/icon/catLoawding.svg";
import CatAdd from "../../public/icon/CatAdd.svg";

export function CatGallery() {
  const [count, setCount] = useState(20);
  const [selectedCat, setSelectedCat] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const increment = () => {
    setCount((item) => item + 20);
    refetch();
  };

  const apiKey =
    "live_hRhVM86AOKKY00E8M9ATJsed7nfnKLP0deR8JlQC4drZ0FAJvg0AaBtFEEAVH6Sg";

  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["cats", count],
    queryFn: async () => {
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${count}`,
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
        <img className="animate-spin " src={CatLoading} alt={"loading"} />
      </div>
    );
  if (error)
    return <p className="text-center mt-10">Something went wrong 😿</p>;

  return (
    <>
      <div className="relative p-10">
        {/* ADD BUTTON */}
        <button
          onClick={increment}
          disabled={isFetching}
          className="fixed z-50 top-6 right-6 bg-orange-500 text-white font-semibold p-2 rounded-full shadow-lg hover:bg-orange-700 transition disabled:opacity-50"
        >
          {isFetching ? "Loading..." : <img className="w-5" src={CatAdd} alt="add" />}
        </button>

        {/* GALLERY */}
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-5">
          {data?.map((cat: any) => (
            <img
              key={cat.id}
              src={cat.url}
              alt="cat"
              onClick={() => {
                setSelectedCat(cat.url);
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
              src={selectedCat!}
              alt="cat"
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl"
            />
            
          </div>
        )}
      </div>
    </>
  );
}
