import React from 'react'
interface PopUpProps{
    popup:boolean
    setPopup:React.Dispatch<React.SetStateAction<boolean>>;
    index:number;
    handleDelete:(index:number)=>void;
}
const PopUp:React.FC<PopUpProps>=({popup,setPopup,index, handleDelete})=> {
    const handlePopup=()=>{
        setPopup(!popup)
    }
  return (
    <div className='popup-div'>
        <h2>Do You Really Want To Delete?</h2>
        <button className='btn' onClick={()=>handleDelete(index)}>Yes</button>
        <button className='btn' onClick={handlePopup}>No</button>
    </div>
  )
}

export default PopUp