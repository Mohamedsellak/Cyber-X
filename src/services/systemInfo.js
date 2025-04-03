const si = require('systeminformation');

const getSystemInfo = async () => {
  try {
    const cpu = await si.cpu();
    const mem = await si.mem();
    const os = await si.osInfo();
    const disk = await si.fsSize();
    const network = await si.networkInterfaces();

    return { cpu, mem, os, disk, network };
  } catch (error) {
    console.error('Error fetching system information:', error);
    throw error;
  }
};

const getTemperature = async () => {
  try {
    const temp = await si.cpuTemperature();
    return temp;
  } catch (error) {
    console.error('Error fetching temperature:', error);
    throw error;
  }
};

const getUptime = async () => {
  try {
    const time = await si.time();
    return {
      uptime: time.uptime,
      bootTime: time.boottime,
      timezone: time.timezone
    };
  } catch (error) {
    console.error('Error fetching uptime:', error);
    throw error;
  }
};

let lastStats = {};

const getNetworkStats = async () => {
  try {
    const [stats, defaultIface] = await Promise.all([
      si.networkStats(),
      si.networkInterfaceDefault()
    ]);

    const currentTime = Date.now();
    const activeInterfaces = stats.filter(iface => iface.operstate === 'up' || iface.rx_bytes > 0);
    
    // Prioritize default interface or first active interface
    const mainInterface = activeInterfaces.find(iface => iface.iface === defaultIface) || activeInterfaces[0];
    
    if (!mainInterface) {
      return { speedIn: 0, speedOut: 0, total: 0, interface: null };
    }

    const ifaceName = mainInterface.iface;
    
    if (!lastStats[ifaceName]) {
      lastStats[ifaceName] = {
        time: currentTime,
        rx_bytes: mainInterface.rx_bytes,
        tx_bytes: mainInterface.tx_bytes
      };
      return { speedIn: 0, speedOut: 0, total: 0, interface: ifaceName };
    }

    const timeDiff = (currentTime - lastStats[ifaceName].time) / 1000;
    const rxDiff = mainInterface.rx_bytes - lastStats[ifaceName].rx_bytes;
    const txDiff = mainInterface.tx_bytes - lastStats[ifaceName].tx_bytes;

    lastStats[ifaceName] = {
      time: currentTime,
      rx_bytes: mainInterface.rx_bytes,
      tx_bytes: mainInterface.tx_bytes
    };

    const speedIn = Number(((rxDiff / timeDiff) / (1024 * 1024)).toFixed(2));
    const speedOut = Number(((txDiff / timeDiff) / (1024 * 1024)).toFixed(2));

    return {
      speedIn: Math.max(0, speedIn),
      speedOut: Math.max(0, speedOut),
      total: Math.max(0, speedIn + speedOut),
      interface: ifaceName,
      totalReceived: mainInterface.rx_bytes,
      totalTransmitted: mainInterface.tx_bytes
    };
  } catch (error) {
    console.error('Error fetching network stats:', error);
    return { speedIn: 0, speedOut: 0, total: 0, interface: null };
  }
};

module.exports = {
  getSystemInfo,
  getTemperature,
  getUptime,
  getNetworkStats
};
