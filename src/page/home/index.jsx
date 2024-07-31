import { useEffect, useState } from "react";
import Card from "../../components/card";

import "./home.css";
import { BASE_URL } from "./constant";
import Button from "../../components/button";
import Dialog from "../../components/modal";
// Container
function Home() {
  // Home page logic and state will be defined here
  const [pokemonList, setPokemonList] = useState([]);
  const [nextUrl , setNextUrl] = useState('')
  const[showDetailsDialog , setDetailDialog] = useState(false);

  async function fetchPokemon(url) {
    try {
      const data = await fetch(url);
      const res = await data.json();
      setPokemonList([...pokemonList ,...res[0]?.results ]);
      setNextUrl(res[0].next)
    } catch (error) {
      console.error("Error::", error);
    }
  }

  useEffect(() => {
    const url  = `${BASE_URL}${1}`
    fetchPokemon(url); // after mounted
  }, []);

  function loadMore() {
    if(nextUrl) {

    }
    fetchPokemon(nextUrl)
  }
  function handleKnowMore () {
    setDetailDialog(true)
  }
  return (
    <div>
      <div id="section">
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
              handleKnowMore = {handleKnowMore}
            />
          );
        })}
      </div>
      <div className="pagination">
          <Button 
            buttonText= 'More Pokemons'
            classes='load-more' 
            buttonHandler = {loadMore}
            disabled= {!nextUrl}
          />
      </div>
      <Dialog show={showDetailsDialog}/>
    </div>
  );
}

export default Home;
