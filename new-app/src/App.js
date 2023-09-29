import { useState } from "react"
import "./App.css"
import Toggle from "./components/Toggle"
import Show from "./components/Show"
import Maths from "./components/Maths"
import MyForm from "./components/MyForm"
import PropDrilling from "./components/PropDrilling"
import Context from "./components/Context"
import Fetching from "./components/Fetching"
import AppBar from "./components/AppBar"

function App() {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(previousShow => !previousShow)

  return (
    <div>
      <AppBar />
      <div className="Container">
        <h1>Adrian</h1>

        <Fetching />
        <PropDrilling />
        <Context />
        <MyForm />
        <Maths />
        <Show show={show} />
        <Toggle toggleShow={toggleShow} />
      </div>
    </div>
  )
}

export default App
