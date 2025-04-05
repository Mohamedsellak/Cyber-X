const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  getSystemInfo: () => ipcRenderer.invoke('get-system-info'),
  getTemperature: () => ipcRenderer.invoke('get-temperature'),
  getUptime: () => ipcRenderer.invoke('get-uptime'),
  getNetworkStats: () => ipcRenderer.invoke('get-network-stats'),
  scanNetwork: (range) => ipcRenderer.invoke('scan-network', range),
  portScan: (target, ports) => ipcRenderer.invoke('port-scan', target, ports),
  serviceDiscovery: (target) => ipcRenderer.invoke('service-discovery', target),
  // checkSSLCertificate: (domain) => ipcRenderer.invoke('check-ssl-certificate', domain)
});