import AddToDo from "./Components/AddToDo"
import Todos from "./Components/Todos"
import Navbar from "./Components/Navbar"
import "./App.css"

const App = () => {
  return (
    <div>
      <main className="main">
        <h1 className="main-task ">Todo React + TypeScript</h1>
        <Navbar/>
        <AddToDo/>
        <Todos/>
      </main>
    </div>
  )
}

export default App
