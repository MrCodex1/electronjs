const { app, BrowserWindow } = require('electron')
const path = require('path'); 
const url = require('url');
let win 
function createWindow(){
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true
        }
      })

    win.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file:',
        slashes:true
    }))

    win.on('closed',()=>{
        win = null
    })

    win.openDevTools()
}

app.on('ready',createWindow)
app.on('window-all-closed',()=>{
    app.quit()
    if(process.platform !== 'darwin'){
    app.quit()
    }
    if(process.platform !== 'win32'){
        app.quit()
        }
})

app.on('activate',()=>{
    if(win === null){
        createWindow()
    }
})