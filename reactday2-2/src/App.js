import './App.css';
import { useState, useEffect } from "react";
import Head from './components/head';
import TodoList from './components/todolist';


function App() {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    console.log(todos);
  }, [todos])

  return (
    <div className="App">
      <Head todoList={todos} onTodoChange={setTodos}/>
      <TodoList todoList={todos} onTodoChange={setTodos}/>
    </div>
  );
}

export default App;
