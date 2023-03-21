import { useEffect, useState } from "react"
import { DataStore } from "@aws-amplify/datastore"
import { Todo } from "./models"

import "./Custom.scss"

function App() {
  const [modelTable, setModelTable] = useState(null)

  useEffect(() => {
    showTodo()
  }, [])

  async function createTodo(name, description = " ") {
    await DataStore.save(
      new Todo({
        name: name,
        description: description,
      })
    )

    await showTodo()
  }

  async function showTodo() {
    const models = await DataStore.query(Todo)
    setModelTable(models)
  }

  async function deleteTodo(id) {
    const modelToDelete = await DataStore.query(Todo, id)
    DataStore.delete(modelToDelete)

    await showTodo()
  }

  return (
    <>
      <div class="title">
        <span>Sandbox Amplify</span>
      </div>

      <div className="home">
        <form
          className="form"
          id="form"
          onSubmit={(e) => {
            e.preventDefault()

            const name = document.getElementById("name")?.value
            const description = document.getElementById("description")?.value

            createTodo(name, description)
          }}
        >
          <div className="form__group field">
            <input
              placeholder="Name"
              className="form__field"
              type="input"
              id="name"
              required
            />
            <label className="form__label" htmlFor="name">
              Name
            </label>
          </div>

          <div className="form__group field">
            <input
              placeholder="Description"
              className="form__field desc"
              type="input"
              id="description"
              required
            />
            <label className="form__label" htmlFor="description">
              Description
            </label>
          </div>

          <button type="submit">Add</button>
        </form>

        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>ID</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {modelTable?.map((row) => {
                const uuid = row.id

                return (
                  <tr>
                    <td>{row.name}</td>
                    <td>{row.description}</td>
                    <td>
                      {uuid.length > 10 ? uuid.substring(0, 15) + "..." : uuid}
                    </td>
                    <td onClick={() => deleteTodo(row.id)}>
                      <button className="button-delete">X</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
