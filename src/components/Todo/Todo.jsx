import React from 'react'
import './Todo.css'

const todo = ({todo, removeTodo, completeTodo}) => {
  return (
    
    <div className="todo" >
            
      <div className="content">
        
        <button className={todo.isCompleted? "circle completed" : "circle"} onClick={()=> completeTodo(todo.id)}>
          <img className='iconCheck' src="../src/assets/Images/icon-check.svg"/>
        </button>
        <p style={{color: todo.isCompleted ? "red" : "", textDecoration: todo.isCompleted ? "line-through" : "" }}>{todo.text}</p>

        <button className="removeButton" onClick={()=> removeTodo(todo.id)}> <img src="./src/assets/Images/icon-cross.svg" alt="" /> </button>
      </div>
      
    </div>
  )
}

export default todo