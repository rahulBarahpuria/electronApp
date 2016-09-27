
const{app, BrowserWindow, Tray} = require('electron');
//var updater = require('electron-updater');
let win;
console.log('the Application');
console.log('Electron version: '+process.versions['electron']);
function createWindow(){

    win = new BrowserWindow({
      height : 800,
      width : 600

      });
      win.loadURL('C:/rahul/Electron/HelloElectron/index.html');
}

function initUpdates(){
    let platform = process.platform;
    let arch = process.arch;
    let version = app.getVersion();
    console.log(arch);
    console.log(platform);
    console.log('app version: '+version);
    //autoUpdater.setFeedURL('https://domain.com/' + platform + '/' + version,{});
    //
    var autoUpdater = require('C:/rahul/Electron/HelloElectron/node_modules/auto-updater');
    if(autoUpdater){
      console.log(autoUpdater);
    }
    // autoUpdater.on('checking-for-update', () => {
    //    console.log("checking-for-update");
    // });
  }
    //
    // autoUpdater.on('update-available', () => {
    //     console.log("update-available");
    // });
    //
    // autoUpdater.on('update-not-available', () => {
    //     console.log("update-not-available");
    // });
    //
    // autoUpdater.on('update-downloaded', () => {
    //     console.log("update-downloaded");
    // });
    //
    // autoUpdater.checkForUpdates();
app.on('ready', createWindow);
app.on('ready', initUpdates);
