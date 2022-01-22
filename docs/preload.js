const { contextBridge, ipcRenderer } = require('electron')
const fs = require('fs')
contextBridge.exposeInMainWorld('myAPIs', {
    readFile: () => {
        return ipcRenderer.invoke('readFile')
    },
    saveFile: (data)=>{
        ipcRenderer.invoke('saveFile',data)
    }
})