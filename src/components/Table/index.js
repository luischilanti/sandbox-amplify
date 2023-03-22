import { useAmplify } from "../../hooks/useAmplify"

const Table = () => {
  const { content, deleteTodo } = useAmplify()

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>ID</th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {content?.map((row, index) => {
          const uuid = row.id

          return (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.description}</td>
              <td>{uuid.length > 10 ? uuid.substring(0, 15) + "..." : uuid}</td>
              <td onClick={() => deleteTodo(row.id)}>
                <span className="actions" title="edit">
                  ✏️
                </span>
              </td>
              <td onClick={() => deleteTodo(row.id)}>
                <span className="actions" title="delete">
                  🗑️
                </span>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
