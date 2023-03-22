import { useEffect, useState } from "react"

import { DataStore } from "@aws-amplify/datastore"
import { Todo } from "../models"

export const useAmplify = () => {
  const [modelTable, setModelTable] = useState(null)

  const showTodo = async () => {
    const models = await DataStore.query(Todo)
    setModelTable(models)
  }

  // eslint-disable-next-line
  const createTodo = async (name, description) => {
    await DataStore.save(
      new Todo({
        name: name,
        description: description,
      })
    )
  }

  // eslint-disable-next-line
  const deleteTodo = async (id) => {
    const modelToDelete = await DataStore.query(Todo, id)
    DataStore.delete(modelToDelete)
  }

  useEffect(() => {
    showTodo()
  }, [createTodo, deleteTodo])

  return {
    createTodo,
    showTodo,
    deleteTodo,
    content: modelTable,
  }
}
