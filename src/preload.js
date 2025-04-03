const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  getSystemInfo: () => ipcRenderer.invoke('get-system-info'),
  getTemperature: () => ipcRenderer.invoke('get-temperature'),
  getUptime: () => ipcRenderer.invoke('get-uptime'),
  getNetworkStats: () => ipcRenderer.invoke('get-network-stats')
});