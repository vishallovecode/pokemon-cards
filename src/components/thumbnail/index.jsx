
const Thumbnail = (props) => {
  const {imageUrl , height = 120 , width = 120} = props;
  return (
    <img src= {imageUrl} height={height} width={width}/>
  )
}

export default Thumbnail;



// Explanation

  //   // const  height = props.height  ||  120
  //   // const  width = props.width  ||  120
  //   // const imageUrl = props.imageUrl

  //  props = {
  //   imageUrl: '',
  //  }

  // destructructuring

