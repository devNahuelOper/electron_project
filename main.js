const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let win;

const createWindow = () => {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL(url.format ({
    pathname: path.join(__dirname, 'coverLetter.html'),
    protocol: 'file:',
    slashes: true
  }))
}

app.on('ready', createWindow);

// app.on('ready').then(() => {
//   const myWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true
//     }
//   });

//   myWindow.loadFile('index.html');
// });

// const tray = new Tray('/my-icon');

// const contextMenu = Menu.buildFromTemplate([
//   { label: 'Cool', type: 'radio' },
// ]);

// tray.setToolTip("Electron rocks⚡️");