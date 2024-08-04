import { useEffect, useState } from 'react';
import './modal.css'
import { type } from '@testing-library/user-event/dist/type';
function Dialog(props) {
  const [showDialog , setShowDialog] = useState()

  // state  and props update capturing
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
    <div className={`modal-content ${props.type}` }>
      <div className="dialog-header">
        <div className='cross-icon' onClick={closeDialog}>
        &#10005;
        </div>
      </div>
      <div className='dialog-body'>
      {props.children}
      </div>
      </div>
    </div>

  )
}


export default  Dialog;

