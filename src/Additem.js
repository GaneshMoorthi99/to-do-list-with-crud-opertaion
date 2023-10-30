import React from 'react'
import { FaPlus } from 'react-icons/fa'
import {useRef} from 'react'

const Additem = ({newItem,setNewItem,handleSubmit}) => {
  const inputRef=useRef()

  return (
    <div>
      <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input
         ref={inputRef}
         id="addItem"
         type='text'
         autoFocus
         required
         placeholder='Add Item'
         value={newItem}
         onChange={(e)=>setNewItem(e.target.value)}
         />
         <button type="submit" aria-label='Add Item' onClick={()=>inputRef.current.focus()}>
            <FaPlus/>
         </button>

      </form>
    </div>
  )
}

export default Additem
