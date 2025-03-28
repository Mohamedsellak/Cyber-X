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

module.exports = {
  getSystemInfo,
  getTemperature,
  getUptime
};
