import React, { useState } from "react";
import PokemonSearch from "../components/PokemonSearch";
import PokemonList from "../components/PokemonList";

const Home = () => {
  return (
    <div className="bg-[#0a141e] min-w-full flex flex-col items-center">
      <div className="w-full lg:w-3/4 max-w-[1080px] p-5">
        <PokemonSearch />
        <PokemonList />
      </div>
    </div>
  );
};

export default Home;
