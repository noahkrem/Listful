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
const input = document.querySelector<HTMLInputElement>("#new-task-title")

const tasks: Task[] = loadTasks()  // Array of Tasks
tasks.forEach(addListItem)

// Listen for input from the user
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
  saveTasks()
  addListItem(newTask)
  input.value = ""  // Clear input field
})

// Add a task to the array of tasks
function addListItem(task: Task) {
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  const deleteButton = document.createElement("button")
  const editButton = document.createElement("button")
  
  // Configure the task
  configureCheckbox(checkbox, task)
  configureDeleteButton(deleteButton, task, item)
  configureEditButton(editButton, task, label)

  // Append elements to the label and item
  label.append(checkbox, task.title)  // Label carries the checkbox and the title of the task
  item.append(label, editButton, deleteButton)  // Append the label and the delete button
  list?.append(item)
}

// Save the tasks to local storage
function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks))
}

// Load the tasks from local storage
function loadTasks(): Task[] {
  const taskJSON = localStorage.getItem("TASKS")
  if (taskJSON == null) return []
  return JSON.parse(taskJSON)
}

// Configure the checkbox
function configureCheckbox(checkbox: HTMLInputElement, task: Task) {
  checkbox.type = "checkbox"
  checkbox.checked = task.completed
  checkbox.id = `task-${task.id}`;  // Adding a unique id
  checkbox.name = `task-${task.id}`;  // Adding a unique name
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked
    saveTasks()
  })
}

// Configure the delete button
function configureDeleteButton(deleteButton: HTMLButtonElement, task: Task, item: HTMLLIElement) {
  deleteButton.textContent = "Delete"
  deleteButton.addEventListener("click", () => {
    // Remove the task from the tasks array
    const taskIndex = tasks.findIndex(t => t.id === task.id)
    if (taskIndex > -1) { // If taskIndex exists...
      tasks.splice(taskIndex, 1)
      saveTasks()
      item.remove() // Remove the task from the DOM (Document Object Model, the tree of objects)
    }
  })
}

// Configure the edit button
function configureEditButton(editButton: HTMLButtonElement, task: Task, label: HTMLLabelElement) {
  editButton.textContent = "Edit"
  editButton.addEventListener("click", () => {
    const newTitle = prompt("Edit task title:", task.title)
    if (newTitle != null && newTitle.trim() !== "") { // If the new title is not empty and does not contain only spaces
      task.title = newTitle.trim();
      label.childNodes[1].nodeValue = task.title  // Update the label text
      saveTasks()
    }
  })
}