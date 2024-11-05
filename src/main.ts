import './style.css'
import { v4 as uuidV4 } from "uuid" 

type Task = {  // Custom type
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("new-task-title")

form?.addEventListener("submit", e => {
  e.preventDefault()  // Don't want to accidentally refresh our page

  if (input?.value == "" || input?.value == null) return  // Optional Chaining (Question mark): 
                                                          // If this thing exists, give me the value. If not, return undefined

  const newTask = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

  addListItem(newTask)
})

function addListItem(task: Task) {

}