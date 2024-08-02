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
      const results = res[0].results;
      for(let i=0;i<results.length;i++) {
        results[i].details  = await  getSinglePokemonDetails(results[i].url) //. rukna ha backend se data kena ha data ane ke  bad jo data hoga usko store karna ha 
        // individuyal object me jisme key details hogi
        // we adding details key to each object
      }
      // results.forEach(async (elem , index)=>{
      //   elem.detrails =  await  getSinglePokemonDetails(results[i].url)
      // })
      console.log(results , 'uopdated results')
      setPokemonList([...pokemonList ,...results]);
      setNextUrl(res[0].next)
    } catch (error) {
      console.error("Error::", error);
    }
  }

  async function getSinglePokemonDetails (url) {
    try {
      const res =  await  fetch(url);
      const data = await res.json();
      const details  =  data[0];
      return details;
    }
    catch(error) {
      console.error('Error::' ,error)
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
    setDetailDialog(true) // 
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
              type={item.details.type}
              imageUrl={
               item.details.image
              }
              pokeMonName={item.name}
              rank={item.details.id}
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
      <Dialog 
        show={showDetailsDialog}
        setDetailDialog= {setDetailDialog}
      >
        <h1>Hey I am props.children</h1>
      </Dialog>
    </div>
  );
}

export default Home;


// [
//   {
//     "id": 1,
//     "name": "bulbasaur",
//     "type": "grass",
//     "stats": [
//       {
//         "base_stat": 45,
//         "effort": 0,
//         "stat": {
//           "name": "hp",
//           "url": "https://pokeapi.co/api/v2/stat/1/"
//         }
//       },
//       {
//         "base_stat": 49,
//         "effort": 0,
//         "stat": {
//           "name": "attack",
//           "url": "https://pokeapi.co/api/v2/stat/2/"
//         }
//       },
//       {
//         "base_stat": 49,
//         "effort": 0,
//         "stat": {
//           "name": "defense",
//           "url": "https://pokeapi.co/api/v2/stat/3/"
//         }
//       },
//       {
//         "base_stat": 65,
//         "effort": 1,
//         "stat": {
//           "name": "special-attack",
//           "url": "https://pokeapi.co/api/v2/stat/4/"
//         }
//       },
//       {
//         "base_stat": 65,
//         "effort": 0,
//         "stat": {
//           "name": "special-defense",
//           "url": "https://pokeapi.co/api/v2/stat/5/"
//         }
//       },
//       {
//         "base_stat": 45,
//         "effort": 0,
//         "stat": {
//           "name": "speed",
//           "url": "https://pokeapi.co/api/v2/stat/6/"
//         }
//       }
//     ],
//     "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
//     "height": 7,
//     "weight": 69
//   }
// ]