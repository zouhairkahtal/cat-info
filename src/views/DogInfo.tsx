import { useQuery } from "@tanstack/react-query";
import Random from "../../public/icon/random.svg";
import BackBTN from "../../public/icon/back.svg";

import { useState } from "react";
import { NavLink } from "react-router-dom";

export function DogInfo() {
  const [count, setCount] = useState(1);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["dogInfo"],
    queryFn: async () => {
      const res = await fetch("https://dogapi.dog/api/v2/facts?limit=1");
      return res.json();
    },
  });

  console.log();

  if (isLoading) return <p>Loading info...</p>;
  if (error) return <p>Something went wrong 😿</p>;

  return (
    <>
      <div className="w-full h-full flex items-center justify-center min-h-[900px]">
        <NavLink to={"/dogPage"}>
          <button className="absolute top-4 left-4 select-none">
            <img src={BackBTN} alt={BackBTN} className="w-10" />
          </button>
        </NavLink>
        <div className="w-10/12 max-w-[600px] max-h-[630px] bg-red-500 h-4/6 rounded-lg flex items-center justify-start pt-5 flex-col">
          <div className="w-[90%] h-5/6 bg-white rounded-xl p-5 overflow-auto bg-[url('./assets/DogInfoImage/dogInfo.png')] bg-cover">
            <h1 className="text-red-500 text-2xl font-bold mb-3">
              Info: {count}
            </h1>

            <p className="text-red-500  font-medium leading-relaxed backdrop-brightness-[25%] p-4">
              {data?.data?.[0]?.attributes?.body}
            </p>
          </div>

          <button
            onClick={() => {
              refetch();
              setCount(count + 1);
            }}
            className="bg-red-500 rounded-lg w-14 h-14 border border-red-500 hover:border-white mt-5 transition duration-300 ease-in-out flex items-center justify-center"
          >
            <img src={Random} alt="random" />
          </button>
        </div>
      </div>
    </>
  );
}
