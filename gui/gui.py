from tkinter import *

# Must go first in the program
root = Tk()
root.title("To-Do List")

e = Entry(root, width=50)
e.grid(row=0, column=0, columnspan=2, padx=10, pady=10)


def ButtonClick(category):
    e.delete(0, END)
    e.insert(0, category)


# def MyClick():
#     # Label widget
#     myLabel = Label(root, text=e.get())
#     myLabel.pack()

# Buttons
MovieButton = Button(root, text="Movie List", padx=50, command=lambda: ButtonClick("Enter a movie name: "))
TaskButton = Button(root, text="To-Do List", padx=50, command=lambda: ButtonClick("Enter a task: "))
MovieButton.grid(row=1, column=0)
TaskButton.grid(row=1, column=1)





# Root widget
root.mainloop()