import { useEffect, useState } from 'react';
import './modal.css'
function Dialog(props) {
  const [showDialog , setShowDialog] = useState()
  useEffect(()=>{
    setShowDialog(props.show)
  }, [props.show])
  function closeDialog() {
    setShowDialog(false) // child
    props.setDetailDialog(false) // parent state change  / two way bindin g
  }
  if(!showDialog) {
    return null;
  }
  return  (
 <div className="dialog">
    <div className="dialog-overlay"></div>
    <div className='modal-content'>
      <div className="dialog-header">
        <div className='cross-icon' onClick={closeDialog}>
        &#10005;
        </div>
      </div>
        {props.children}
      </div>
    </div>

  )
}


export default  Dialog;