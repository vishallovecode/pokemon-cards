import Button from "../button";
import Thumbnail from "../thumbnail";
import  './card.css'
function Card(props) {
  const  {imageUrl , pokeMonName , type, rank} = props;
  return  (
    <div className={`card ${type}`}>
      <div className="rank">
        #{rank}
      </div>
      <Thumbnail imageUrl= {imageUrl}/>
      <div className="title">
      {pokeMonName}
      </div>
      <div>
      Type: {type}
      </div>
      <div>
      <Button buttonText='Know More..' />
      </div>
    </div>
  )
}


export default Card;