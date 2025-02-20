const { app, BrowserWindow, Menu } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})

Menu.setApplicationMenu(null);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

// app.whenReady().then(() => {
//     createWindow()

//     app.on('activate', () => {
//         if (BrowserWindow.getAllWindows().length === 0) createWindow()
//     })
// })

//! Code above is the original code, I commented it out becuase it was causing the window to open twice
