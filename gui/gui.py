from tkinter import *

# Must go first in the program
root = Tk()
root.title("To-Do List")

e = Entry(root, width=70)
e.grid(row=0, column=0, columnspan=4, padx=10, pady=10)


def ButtonClick(category):
    e.delete(0, END)
    e.insert(0, category)


# def MyClick():
#     # Label widget
#     myLabel = Label(root, text=e.get())
#     myLabel.pack()

# Buttons
CreateButton = Button(root, text="Create A List", padx=30, command=lambda: ButtonClick("Enter a name for your new list: "))
AddButton = Button(root, text="Add To A List", padx=30, command=lambda: ButtonClick("Enter the name of the list to add to: "))
RemoveButton = Button(root, text="Remove From A List", padx=30, command=lambda: ButtonClick("Enter the name of the list to remove from: "))
DeleteButton = Button(root, text="Delete A List", padx=30, command=lambda: ButtonClick("Enter the name of the list to delete: "))
CreateButton.grid(row=1, column=0)
AddButton.grid(row=1, column=1)
RemoveButton.grid(row=1, column=2)
DeleteButton.grid(row=1, column=3)





# Root widget
root.mainloop()