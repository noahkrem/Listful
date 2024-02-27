from tkinter import *

# Must go first in the program
root = Tk()

def MyClick():
    # Label widget
    myLabel = Label(root, text="Hello World!")
    myLabel.grid(row=0, column=0)

# Button
myButton = Button(root, text="Click me", padx=50, command=MyClick, fg="white", bg="black")
myButton.grid(row=1, column=0)



# Root widget
root.mainloop()