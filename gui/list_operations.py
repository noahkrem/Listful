import time

def AddElement():
    today = (time.strftime("%Y-%m-%d"))
    entryName = "Movie3"
    releaseDate = "Year3"
    newRow = "%s,%s,%s\n" % (today, entryName, releaseDate)
    with open("lists/newFile.csv", "a") as file :
        file.write(newRow)