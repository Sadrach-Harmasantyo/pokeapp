import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons, searchPokemons, selectAllPokemons, selectPokemonStatus, selectSearchTerm, selectTotalPages } from "../redux/slices/pokemonSlice";
import Skeleton from "./Skeleton";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const dispatch = useDispatch();

  const searchTerm = useSelector(selectSearchTerm);
  const pokemons = useSelector(selectAllPokemons);
  const status = useSelector(selectPokemonStatus);
  const pokemonPerPage = 12;

  const filteredPokemons = useSelector(searchPokemons(searchTerm));
  const totalPages = Math.ceil(filteredPokemons.length / pokemonPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [currentPage, searchTerm]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemons = searchTerm ? filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon) : pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  return (
    <div className="bg-[#0a141e] min-w-full flex flex-col items-center">
      {status === "loading" && <Skeleton count={12} classNameContainer={"flex flex-wrap gap-4 justify-center w-full mb-10"} classNameContent={"bg-slate-200 h-[350px] w-full md:w-[31%] rounded-lg animate-pulse"} />}
      {status === "failed" && <div>Error occurred: {error}</div>}

      <div className="flex flex-wrap gap-4 justify-center w-full mb-10">
        {currentPokemons.length !== 0 ? currentPokemons.map((pokemon, index) => <PokemonCard key={index} data={pokemon} />) : <h1 className="text-white text-3xl">Pokemon Not Found</h1>}
      </div>

      <div className="flex w-full gap-2 text-white border-2 border-[#466e9b] p-3 rounded-lg justify-center items-center font-semibold">
        <button onClick={handleFirstPage} className={`bg-[#466e9b] rounded-md h-full w-full font-semibold ${currentPage === 1 ? "hidden" : ""}`}>
          First
        </button>
        <button onClick={handlePrevPage} className={`bg-[#466e9b] rounded-md h-full w-full font-semibold ${currentPage === 1 ? "hidden" : ""}`}>
          {"<"}
        </button>

        <div className="w-full text-center">
          Page {currentPage} of {totalPages}
        </div>

        <button onClick={handleNextPage} className={`bg-[#466e9b] rounded-md w-full font-semibold ${currentPage === totalPages ? "hidden" : ""}`}>
          {">"}
        </button>
        <button onClick={handleLastPage} className={`bg-[#466e9b] rounded-md w-full font-semibold ${currentPage === totalPages ? "hidden" : ""}`}>
          Last
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
