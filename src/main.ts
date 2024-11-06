//import './style.css'
import { v4 as uuidV4 } from "uuid" 

type Task = {  // Custom type
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-task-title")

const tasks: Task[] = []  // Array of Tasks

form?.addEventListener("submit", e => {
  e.preventDefault()  // Don't want to accidentally refresh our page

  if (input?.value == "" || input?.value == null) return  // Optional Chaining (Question mark): 
                                                          // If this thing exists, give me the value. If not, return undefined

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

  tasks.push(newTask)

  addListItem(newTask)
  input.value = ""  // Clear user entry after it has been entered
})

function addListItem(task: Task) {
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")

  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked
    console.log(tasks)
  })
  checkbox.type = "checkbox"
  checkbox.checked = task.completed

  label.append(checkbox, task.title)  // Label carries the checkbox and the title of the task
  item.append(label)  // Item carries the label
  list?.append(item)
}