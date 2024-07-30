
import  './button.css'
function Button  (props) {
  const {buttonText , classes = '', buttonHandler , disabled}  = props; 
  return (
    <button disabled ={disabled} className={`button ${classes}`} onClick={buttonHandler}>{buttonText}</button>
  )
}

export default Button;