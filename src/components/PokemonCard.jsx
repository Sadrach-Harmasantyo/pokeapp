import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ data }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [types, setTypes] = useState([]);

  // console.log({ data });

  useEffect(() => {
    const fetchImageUrl = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data.name}`);
      const resultsImg = response.data.sprites.other.showdown.front_default || response.data.sprites.front_default;
      const resultsTypes = response.data.types;
      setImageUrl(resultsImg);
      setTypes(resultsTypes);
    };

    fetchImageUrl();
  }, [data.name]);

  return (
    <Link to={`/pokemon/${data.name}`} className="shadow-lg rounded-lg w-full md:w-[31%] border-2 border-[#466e9b]">
      <div className="w-full flex justify-center p-4 text-white">
        <img src={imageUrl} alt={data.name} className="w-48 h-48" />
      </div>
      <div className="w-full border-[#aaadb1] border-t-2 p-5 flex flex-col gap-4 justify-between">
        <p className="text-center text-white text-2xl font-semibold capitalize">{data.name}</p>
        <div className="flex gap-2">
          {types.map((type) => (
            <div key={type.type.name} className="rounded-full py-1 px-5 bg-slate-200">
              <p className="capitalize font-semibold">{type.type.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
