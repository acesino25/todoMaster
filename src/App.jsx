/* HECHO:

AGREGAR EL HOOK AL FORMULARIO

ACORDATE:

Creas el formulario
Lo vinculas con un useRef
Handleas el submit
en el handle new FormData(elref.current)
y de allí pasas el array a objeto haciendo uso
de la propiedad Object.fromEntry([...array.entry()])

y ya con eso tenemos en un objeto el dato del formulario que se lo
pasaremos a un useState

*/




import React, { useState } from 'react'
import Header from './components/Header'
import TodoList from './components/todoList'

// DATAZO:
/*
    Cuando no te renderice las actualizaciones, y tengas que volver a correr el
    npm run dev de vite, lo más probable es que como estás utilizando tailwind u
    otro se esté generando un proble de subcarpetas. Para solucionarlo asegurate
    de que en content, en el archivo tailwind.config.cjs incluyas cada locación
    particularmente la que se encuentra dentro del SRC content: ["./index.html","./src/*.{js,ts,jsx,tsx}",..
    este fue tu problema primordial, faltaba agregar a los elementos sueltos dentro de SRC, donde se encuentra
    App.jsx
*/

const App = () => {

  const initialElements = [
    {
        id: '1',
        title: "Complete the first task",
        completed: true 

    },{
        id: '2',
        title: "Complete the first task",
        completed: false 
    },{
        id: '3',
        title: "Complete the first task",
        completed: false 
    },{
        id: '4',
        title: "Complete the first task",
        completed: true 
    }
]

/* STATES */

  const [todo, setTodo] = useState(initialElements);
  // using an state to determine the filter, will allow us to re-render
  // when the value has changed, without re-invoking the function to check it.
  const [filter, setFilter] = useState("all"); 

  const [dark, setDark] = useState(false);


  /* USE EFFECTS */

  React.useEffect(() => {
    localStorage.setItem('items', JSON.stringify(todo));
  }, [todo]);
  

  /* INDEPENDENT FUNCTIONS AS PROPS*/

  const addNew = (arg) => {
    const newTodo = {
      id: Date.now(),
      title: arg,
      completed: false
    };

    setTodo([...todo, newTodo])
  }

  const filterTodo = () => {
    switch (filter) {
      case "all":
        return todo;

      case "active":
        return todo.filter((element)=>!element.completed);
      case "completed":
        return todo.filter((element)=>element.completed);
    
      default:
        return todo;
    }
  }

  const changeFilter = (arg) => {
    setFilter(arg);
  }

  const remaining = function () {
    const remaining = todo.filter((element)=>!element.completed);

    return remaining.length
  }

  const eraseCompleted = () =>{
    const erasedTodo = todo.filter((element)=>!element.completed)
    setTodo(erasedTodo);
  }

  const eraseTask = (arg) =>{
    const erasedTodo = todo.filter((element)=> element.id != arg);
    setTodo(erasedTodo);

  }

  const darkMode = () =>{
    setDark(!dark);
  }

  // EDIT FUNCTION

  const completed = (arg) =>{ 
    setTodo(todo.map((element)=> element.id=== arg ? {...element, completed: !element.completed}: element));
  }

  return (
    <div>
      <div 
      className="
      bg-[url('./assets/images/bg-mobile-light.jpg')]
      bg-no-repeat bg-cover bg-center h-60">
        <Header toggleDark={darkMode} dark={dark} add={addNew}/>
      </div>

      <TodoList 
      list={filterTodo()} 
      filter={changeFilter} 
      active={filter} 
      remaining={remaining()} 
      erase={eraseCompleted}
      eraseId={eraseTask}
      completed={completed}
      ></TodoList>
    </div>
  )
}

export default App