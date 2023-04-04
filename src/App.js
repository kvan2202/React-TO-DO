import { useState } from 'react';
import Title from "./components/Title" 

function App() {
  const [showTodos,setShowTodos]=useState(true);
  const [todo,setTodo]=useState([
    {title:"Bring Water",id:1},
    {title:"Bring Laptop",id:2},
    {title:"Bring Book",id:3},
    {title:"Bring Pen",id:4}
  ]);  
  

  const handleClick = (id)=>
  {
    setTodo(todo.filter((item)=>{
      return id !== item.id;
    }))
    console.log(id);
  }


  return (
    <div>
      <Title />
      {showTodos && 
        <div>
          <button onClick={()=>setShowTodos(false)}>Hide Todo</button>
        </div>
      }
      {!showTodos &&
        <div>
          <button onClick={()=>setShowTodos(true)}>Show Todo</button>
        </div>
      }
      <div>
        {
          showTodos && 
          todo.map((item)=>(
            <div key={item.id}>
              <h2>{item.title}</h2>
              <button onClick={()=>handleClick(item.id)}>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;