import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/slices/pokemonSlice";

const PokemonSearch = () => {
  const dispatch = useDispatch();
  const [searchTermLocal, setSearchTermLocal] = useState("");

  const handleSearch = () => {
    // console.log({ searchTermLocal });
    dispatch(setSearchTerm(searchTermLocal));
  };

  return (
    <div className="border-2 border-[#466e9b] rounded-lg my-10 flex flex-col p-5 gap-5 w-full">
      <label htmlFor="search" className="text-3xl font-bold text-white">
        Search Pokemon
      </label>
      <div className="w-full flex">
        <input
          type="text"
          id="search"
          value={searchTermLocal}
          onChange={(e) => setSearchTermLocal(e.target.value)}
          placeholder="Search Pokemon"
          className="py-2 px-3 rounded-s-md w-full focus:outline-none focus:ring-0"
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        <button className="bg-[#466e9b] py-1 px-3 rounded-e-md w-1/3 font-semibold text-white" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default PokemonSearch;
