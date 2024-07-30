import { useEffect, useState } from "react";
import Card from "../../components/card";

import "./home.css";
import { BASE_URL } from "./constant";
// Container
function Home() {
  // Home page logic and state will be defined here
  const [pokemonList, setPokemonList] = useState([]);
  async function fetchPokemon(page) {
    try {
      const data = await fetch(`${BASE_URL}${page}`);
      const res = await data.json();
      setPokemonList(res[0]?.results);
    } catch (error) {
      console.error("Error::", error);
    }
  }

  useEffect(() => {
    fetchPokemon(1);
  }, []);

  return (
    <div>
      <div id ='section'>
      <div className="content">
        <h2>Pokemon</h2>
        <h2>Pokemon</h2>
      </div>
      <div className="content2">
        <h2>KingDom</h2>
        <h2>KingDom</h2>
      </div>
    </div>
      <div className="pok-container">
        {pokemonList.map((item) => {
          return (
            <Card
              type="grass"
              imageUrl={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              }
              pokeMonName={item.name}
              rank="1"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
