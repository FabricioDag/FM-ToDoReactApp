import React from 'react'
import './Todo.css'
import iconCheck from '../Todo/icon-check.svg'
import iconCross from '../Todo/icon-cross.svg'

const todo = ({todo, removeTodo, completeTodo}) => {
  return (
    
    <div className="todo" >
            
      <div className="content">
        
        <button className={todo.isCompleted? "circle completed" : "circle"} onClick={()=> completeTodo(todo.id)}>
          <img className='iconCheck' src={iconCheck}/>
        </button>
        <p style={{opacity: todo.isCompleted ? ".2" : "", textDecoration: todo.isCompleted ? "line-through" : "" }}>{todo.text}</p>

        <button className="removeButton" onClick={()=> removeTodo(todo.id)}> <img src={iconCross} alt="" /> </button>
      </div>
      
    </div>
  )
}

export default todo