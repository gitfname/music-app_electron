require("dotenv").config()
const electron = require("electron")
const { app, BrowserWindow } = electron
const path = require("path")

const createMainWindow = () => {
    console.log("hello world");
    const mainWindow = new BrowserWindow()
    if (process.env.MODE === "production") {
        console.log("production");
        mainWindow.loadFile("./app-front/index.html")
    } else {
        console.log("development");
        mainWindow.loadURL("http://localhost:5173")
    }
}

app.whenReady()
    .then(() => {
        createMainWindow()
    })

app.on("window-all-closed", () => app.quit())