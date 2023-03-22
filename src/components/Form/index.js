import { useAmplify } from "../../hooks/useAmplify"

const Form = () => {
  const { createTodo } = useAmplify()

  return (
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
  )
}

export default Form
