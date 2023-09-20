import logo from "./logo.svg"
import "./App.css"
import Hello from "./components/Hello"
import Maths from "./components/Maths"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<Hello
          name="Adrian"
          age={21}
        />*/}
        <Maths />
      </header>
    </div>
  )
}

export default App
