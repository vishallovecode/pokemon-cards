import Button from "../../components/button";
import Card from "../../components/card";
import Thumbnail from "../../components/thumbnail";

 // Container 
function  Home () {
  // Home page logic and state will be defined here
  return  (
    <div>
          <h2>Pokemon Cards</h2>
          {/* <Thumbnail imageUrl= {'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'}/>
          <Button buttonText= {'Know More...'}/> */}
          <Card 
            type='grass' 
            imageUrl= {'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'} 
            pokeMonName="BULBASAUR"
            rank="1"
          />
    </div>
  )
}

export default Home;


