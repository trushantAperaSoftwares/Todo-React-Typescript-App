import AddToDo from "./Components/AddToDo"
import Todos from "./Components/Todos"
import Navbar from "./Components/Navbar"
import "./App.css"

const App = () => {
  return (
    <div>
      <main >
        <h1 >Todo React + TypeScript</h1>
        <Navbar/>
        <AddToDo/>
        <Todos/>
      </main>
    </div>
  )
}

export default App
