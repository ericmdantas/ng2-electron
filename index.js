"use strict";

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win = null;

app.on('ready', () => {
  win = new BrowserWindow({
    width: 900,
    height: 300,
    autoHideMenuBar: true
  });

  win.loadUrl(`file://${__dirname}/index.html`);

  win.on('closed', () => {
    win = null;
  });
});
