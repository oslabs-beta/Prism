// import path from 'path';
// import { app, BrowserWindow } from 'electron';
// import isDev from 'electron-is-dev'; // check whether electron app is in development or production
// import url from 'url';
// import dotenv from 'dotenv';
const path = require('path');
const url = require('url');
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const dotenv = require('dotenv');
dotenv.config();

if (isDev) {
  console.log('Running in development');
} else {
  console.log('Running in production');
}

function createWindow() {
  //const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
  // create the browser window
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  // load the index.html of the app with
  // win.loadFile('index.html')
  win.loadURL(
    isDev
      ? `localhost:${process.env.PORT}`
      : url.format({
          pathname: path.join(__dirname, 'index.html'),
          protocol: 'file:',
          slashes: true,
        })
  );

  if (isDev) win.webContents.openDevTools({ mode: 'detach' });
}

// this method (the callback to whenReady) will be called when electron has finished initialization  and is ready
// to create browser windows. Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS.
//  There, it's for applications and their menu bar to stay active until the user explicitly quits with CMD+Q
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// creates a browserwindow instance provided by electron, which is used to render the web contents - and then loads the html file in the directory onto the browserwindow
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
