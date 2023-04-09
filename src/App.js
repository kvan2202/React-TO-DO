import React from 'react';
import { useState } from 'react';
import Title from "./components/Title" 
import Header from "./components/header"
import Footer from "./components/footer"
import {Modal} from "./components/modal"
import { NewEventForm } from './components/NewEventForm'

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
let subtitle="I AM A GOOD CODER " 
let title = "HI I AM KEVIN "

  return (
    <>
    <h1 style={{textAlign:"center",border:"2px solid red",backgroundColor: showTodos ? "Red":"green"}}>Using Dynamic Styles</h1>
      <Header />
      <Title title={title} subtitle={subtitle}/>
      {showTodos &&       
        <>
          <button onClick={()=>setShowTodos(false)}>Hide Todo</button>
        </>
      }
      {!showTodos &&
        <>
          <button onClick={()=>setShowTodos(true)}>Show Todo</button>
         </>
      }
      <>
        {
          showTodos && 
          todo.map((item)=>(
            <React.Fragment key={item.id}>
              <h2>{item.title}</h2>
              <button onClick={()=>handleClick(item.id)}>Delete</button>
            </React.Fragment>
          ))
        }
        <Modal>
        <NewEventForm /> 
        </Modal>
        <Footer />
      </>
    </>
  );
}

export default App;