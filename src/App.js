
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from 'react';
import Additem from './Additem';
import Searchitem from './Searchitem';


function App() {
  const API_url=" http://localhost:3500/items"
  const[items,setItems]=useState([])
  const[search,setSearch]=useState('')
  const [fetcherr,setFetchErr]=useState('')

  useEffect(()=>{
    const fetchItems=async()=>{
      try{
        const response = await fetch(API_url);
        if(!response.ok) throw Error("Data not received")
        const listItems=await response.json();
        setItems(listItems)
        setFetchErr(null)

      }catch(err){
       setFetchErr(err.message)
      }
    }
    (async ()=> await fetchItems())()
  },[])

   const addItem=(item)=>{
    const id=items.length?items[items.length-1].id+1:1;
    const addNewItem={id,checked:false,item}
    const listItems=[...items,addNewItem]
    setItems(listItems);
  
   }


  const handleCheck=(id)=>{
    const listItems=items.map((item)=>(item.id===id ? {...item,checked:!item.checked}:item))
     setItems(listItems);
    
  }

  const handleDelete=(id)=>{
    const listItems=items.filter((item)=>(item.id!==id))
    setItems(listItems);
  }

  const [newItem,setNewItem]=useState('')
  const handleSubmit=(e)=>{
   e.preventDefault()
   if(!newItem)
   return;
   addItem(newItem)
  setNewItem('')
}

  return (
    <div className="App">
      <Header/>
      <Additem
       newItem={newItem}
       setNewItem={setNewItem}
       handleSubmit={handleSubmit}
      />
      <Searchitem
       search={search}
       setSearch={setSearch}
       />
     <main> 
      {fetcherr && <p>Data not received</p>}
      <Content
       items={items.filter((item)=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
       handleCheck={handleCheck}
       handleDelete={handleDelete}
       />
     </main> 
      <Footer
       length={items.length}
       />
    
      
    </div>
  );
}

export default App;
