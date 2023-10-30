import {FaTrashAlt} from "react-icons/fa";
const Content = ({items,handleCheck,handleDelete}) => {
   
  return (
    <>
      {items.length ? (
      <ul>
         {items.map((item)=>(
            <li className='item' key={item.id}>
                <input 
                   type="checkbox"onChange={()=>handleCheck(item.id)}
                   checked={item.checked}/>
                <label onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
                {item.checked &&
                <FaTrashAlt
                  role='button'
                  tabIndex='0'
                  onClick={()=>handleDelete(item.id)}
                  />}
            </li>

            
         ))}
      </ul>
      ):(
        <p>Your list is empty</p>
      )}
    </>
  )
}

export default Content
