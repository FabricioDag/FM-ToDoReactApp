import { useState, useEffect } from 'react'
import './App.css'

import Todo from './components/Todo/Todo.jsx'
import Headercomp from './components/HeaderComp/Headercomp.jsx'
import Actionsarea from './components/ActionsArea/Actionsarea.jsx'
import Checkbutton from './components/CheckButton/Checkbutton.jsx'

function App() {
  const [todos, setTodos] = useState([
    {
      "id": 1,
      "text": "Complete ToDo App on Frontend Mentor",
      "category": "Study",
      "isCompleted": true
    },
    {
      "id": 2,
      "text": "Jog around the park 3x",
      "category": "Fit",
      "isCompleted": false
    },
    {
      "id": 3,
      "text": "10 minutes of meditation",
      "category": "Personal",
      "isCompleted": false
    },
    {
      "id": 4,
      "text": "Read for 1 hour",
      "category": "Personal",
      "isCompleted": false
    },
    {
      "id": 5,
      "text": "Pick up groceries",
      "category": "Personal",
      "isCompleted": false
    },
    {
      "id": 6,
      "text": "Complete JavaScript Course",
      "category": "Study",
      "isCompleted": false
    },
    {
      "id": 7,
      "text": "Attend yoga class",
      "category": "Fit",
      "isCompleted": false
    },
    {
      "id": 8,
      "text": "Write article on productivity",
      "category": "Work",
      "isCompleted": false
    },
    {
      "id": 9,
      "text": "Prepare presentation for meeting",
      "category": "Work",
      "isCompleted": false
    },
    {
      "id": 10,
      "text": "Call mom",
      "category": "Personal",
      "isCompleted": false
    }
    
  ])

  useEffect(() => {
    // Recupera as tarefas salvas no localStorage quando o componente é montado
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const [value,setValue] = useState("")

  const [filter, setFilter] = useState("All")


  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!value) return

    //add todo
    addTodo(value)
    //clean input
    setValue("")

    console.log(value)
  }

  const addTodo = (text) =>{

    const newTodos = [...todos,{
      id: Math.floor(Math.random()*1000), //generateId() pega o Id do ultimo + 1
      text,
      isCompleted:false,
    }]

    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos));

  }

  const removeTodo = (id) =>{
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo :null)
    setTodos(filteredTodos)
  }

  const completeTodo = (id) =>{
    const newTodos = [...todos]
    newTodos.map((todo)=> todo.id === id? (todo.isCompleted = !todo.isCompleted) : todo)
    setTodos(newTodos)
  }

  return (
    <div className='app'>

      <Headercomp/>
      
      <div className="newTodoArea">
      

      <form onSubmit={handleSubmit}>
        <Checkbutton />
        <input placeholder='Create a new todo...' type="text" value={value} onChange={(e)=>setValue(e.target.value)}/> 
      </form>
      
      
      </div>
      <div className="bottomArea">
        <div className="todoListContainer">
          
          {todos
            .filter((todo) =>filter === "All"? true: filter === "Completed"? todo.isCompleted : !todo.isCompleted)
            .map((todo) => (
            
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />

          ))}

          
        </div>
        <Actionsarea filter={filter} setFilter={setFilter} arrLen={todos.length}/>
      </div>    
    </div>
  )
}

export default App
