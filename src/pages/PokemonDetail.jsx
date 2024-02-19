import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";

const PokemonDetail = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [stats, setStats] = useState([]);

  const { name } = useParams();

  // console.log(name);

  useEffect(() => {
    const fetchDetail = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setHeight(response.data.height);
      setWeight(response.data.weight);
      setAbilities(response.data.abilities);
      setStats(response.data.stats);

      // console.log(response.data);
    };

    fetchDetail();
  }, []);

  return (
    <div className="bg-[#0a141e] min-w-full flex justify-center min-h-screen items-center">
      <div className="w-full lg:w-3/4 max-w-[1080px] flex flex-col md:flex-row py-10 px-5 gap-4">
        <PokemonCard data={{ name }} />
        <div className="text-white p-5 rounded-lg border-2 border-[#466e9b] w-full">
          <p className="font-semibold">
            Height: <span className="font-normal">{(height / 10).toFixed(1)} m</span>
          </p>
          <p className="font-semibold">
            Weight: <span className="font-normal">{(weight / 10).toFixed(1)} kg</span>
          </p>
          <p className="font-semibold">
            Gender: <span className="font-normal">Male / Female</span>
          </p>

          <div className="">
            <p className="font-semibold">Abilities:</p>
            {abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </div>

          <div>
            <p className="font-semibold">Stats:</p>
            {stats.map((stat, index) => (
              <li key={index}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
