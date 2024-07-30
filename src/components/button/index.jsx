
import  './button.css'
function Button  (props) {
  const {buttonText , classes = '', buttonHandler}  = props; 
  return (
    <button className={`button ${classes}`} onClick={buttonHandler}>{buttonText}</button>
  )
}


export default Button;