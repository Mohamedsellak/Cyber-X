const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { getSystemInfo, getTemperature, getUptime, getNetworkStats } = require('./services/systemInfo');
const { scanNetwork, portScan, serviceDiscovery } = require('./services/networkScan');
const whoisLookup = require('./services/whois');
const tcpPing = require('./services/tcpie-ping');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

// Clean IPC handlers setup
ipcMain.handle('get-system-info', getSystemInfo);
ipcMain.handle('get-temperature', getTemperature);
ipcMain.handle('get-uptime', getUptime);
ipcMain.handle('get-network-stats', getNetworkStats);

// Add error handling for network scanning functions
ipcMain.handle('scan-network', async (event, range) => {
  try {
    return await scanNetwork(range);
  } catch (error) {
    console.error('Network scan error:', error);
    throw error;
  }
});

ipcMain.handle('port-scan', async (event, target, ports) => {
  try {
    return await portScan(target, ports);
  } catch (error) {
    console.error('Port scan error:', error);
    throw error;
  }
});

ipcMain.handle('service-discovery', async (event, target) => {
  try {
    return await serviceDiscovery(target);
  } catch (error) {
    console.error('Service discovery error:', error);
    throw error;
  }
});

ipcMain.handle('whois', async (event, domain) => {
  try {
    const result = await whoisLookup(domain);
    return result;
  } catch (error) {
    console.error('Whois lookup error:', error);
    throw error;
  }
});


ipcMain.handle('tcp-ping', async (event, host, port, options) => {
  try {
    const result = await tcpPing(host, port, options);
    return result;
  } catch (error) {
    console.error('TCP ping error:', error);
    throw error;
  }
}
);



// Define the main window
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    icon: path.join(__dirname, 'assets', 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      webSecurity: true,
      sandbox: true
    },
    autoHideMenuBar: true,
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


