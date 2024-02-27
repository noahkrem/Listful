import time
import csv
from tkinter import *
import sys

# For more information about Tkinter: 
#   https://stackoverflow.com/questions/10020885/creating-a-popup-message-box-with-an-entry-field


class PopupWindow(object):

    def __init__(self, master):
        top = self.top = Toplevel(master)
        self.l = Label(top, text = "Hello World")
        self.l.pack()   # The Tkinter function pack() is simply a geometry manager
        self.e = Entry(top)
        self.e.pack()
        self.b = Button(top, text = 'Ok', command = self.cleanup)
        self.b.pack()

    def cleanup(self):
        self.value = self.e.get()
        self.top.destroy

class MainWindow(object):

    def __init__(self, master):
        self.master = master
        self.b = Button(master, text = "click me", command = self.popup)
        self.b.pack()
        self.b2 = Button(master, text = "print value", command = lambda: sys.stdout.write(self.entryValue()+'\n'))
        self.b2.pack()

    def popup(self):
        self.w = PopupWindow(self.master)
        self.b["state"] = "disabled"
        self.master.wait_window(self.w.top)
        self.b["state"] = "normal"

    def entryValue(self):
        return self.w.value
    

if __name__ == "__main__":
    root = Tk() # Must happen before anything else in the program
    m = MainWindow(root)
    root.mainloop()




# today = (time.strftime("%Y-%m-%d"))
# entryName = "Movie3"
# releaseDate = "Year3"
# newRow = "%s,%s,%s\n" % (today, entryName, releaseDate)

# with open("newFile.csv", "a") as file :
#     file.write(newRow)

