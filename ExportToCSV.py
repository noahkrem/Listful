import time
import csv
from tkinter import *
import sys

# For more information about Tkinter: 
#   https://stackoverflow.com/questions/10020885/creating-a-popup-message-box-with-an-entry-field


class popupWindow(object):

    def __init__(self, master):
        top = self.top = Toplevel(master)
        self.l = Label(top, text = "Hello World")

    def cleanup(self):
        self.value = self.e.get()
        self.top.destroy

class mainWindow(object):

    def __init__(self, master):
        self.master = master

    def popup(self):
        self.w = popupWindow(self.master)

    def entryValue(self):
        return self.w.value
    

if __name__ == "__main__":
    root = Tk()
    m = mainWindow(root)
    root.mainloop()




# today = (time.strftime("%Y-%m-%d"))
# entryName = "Movie3"
# releaseDate = "Year3"
# newRow = "%s,%s,%s\n" % (today, entryName, releaseDate)

# with open("newFile.csv", "a") as file :
#     file.write(newRow)

