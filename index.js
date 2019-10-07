const electron = require('electron')
const remote = electron.remote

document.getElementById('close-btn').addEventListener("click",function(e){
    console.log('off');
  const window = remote.getCurrentWindow()
  window.close()      
})