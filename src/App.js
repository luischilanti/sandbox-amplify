import Title from "./components/Title"
import Table from "./components/Table"
import Form from "./components/Form"

import "./styles/App.scss"

function App() {
  return (
    <>
      <Title />

      <div className="home">
        <Form />

        <div className="table">
          <Table />
        </div>
      </div>
    </>
  )
}

export default App
