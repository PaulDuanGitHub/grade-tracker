const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron')
const path = require('path')
const fs = require('fs')
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    })

    const template = [
        {
            label: 'test',
            submenu: [
                {
                    label: 'test22'
                }
            ]
        },
        {
            label: 'test2'
        },
        {
            label: 'test3'
        }
    ]
    var menu = Menu.buildFromTemplate(template)
    //win.setMenu(menu)
    win.loadFile('index.html')

    ipcMain.handle('readFile', () => {
        var filePath = dialog.showOpenDialogSync(win, {
            title: 'Choose your grade file',
            filters: [
                { name: 'JSON', extensions: ['json'] }
            ],
            properties: ['openFile']

        })
        if (filePath != undefined){
            var userData = fs.readFileSync(filePath[0],'utf-8').toString()
        }
        return Promise.resolve(userData)
    })

    ipcMain.handle('saveFile', (event, data) => {
        filePath = dialog.showSaveDialogSync(win, {
            title: 'Save your grade file',
            filters: [
                { name: 'JSON', extensions: ['json'] }
            ],
            properties: ['openFile']

        })
        if (filePath != undefined) {
            fs.writeFileSync(filePath, data, 'utf-8')
        }
    })
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', function () {
    app.quit()
})

