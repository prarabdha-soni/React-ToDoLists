import React from 'react';
import { useState } from 'react';
import ToDoLists from './ToDoLists';
const App = () => {
    
    const [inputList, setInputList] = useState("");
    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
    const [Items, setItems] = useState([]);
    const listOfItems = () => {
        setItems([...Items,inputList]);   
        setInputList("");  
    };

    return(
    <>
   <div className="main_div">
       <div className="center_div">
       <br/> 
       <h1> To Do List</h1>
       <br />
       <input type="text" placeholder="Add notes" value = {inputList} onChange = {itemEvent} />
       
       <button onClick={listOfItems}>+</button> 
       
       <ol>
               {Items.map((itemval)=>
               {
               return <ToDoLists text ={itemval} />})}
       </ol>
       </div>
   </div>
    </>
);


}

export default App;