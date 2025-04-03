const nmap = require('node-nmap');

// Configure nmap path based on platform
if (process.platform === 'win32') {
    nmap.nmapLocation = 'nmap.exe';
}

async function scanNetwork(range = '192.168.1.1/24') {
    return new Promise((resolve, reject) => {
        const scan = new nmap.NmapScan(range, '-sn');
        
        scan.on('complete', results => {
            resolve(results);
        });
        
        scan.on('error', error => {
            reject(error);
        });
        
        scan.startScan();
    });
}

async function portScan(target, ports = '1-1000') {
    return new Promise((resolve, reject) => {
        const scan = new nmap.NmapScan(target, `-sS -p${ports}`);
        
        scan.on('complete', results => {
            resolve(results);
        });
        
        scan.on('error', error => {
            reject(error);
        });
        
        scan.startScan();
    });
}

async function serviceDiscovery(target) {
    return new Promise((resolve, reject) => {
        const scan = new nmap.NmapScan(target, '-sV');
        
        scan.on('complete', results => {
            resolve(results);
        });
        
        scan.on('error', error => {
            reject(error);
        });
        
        scan.startScan();
    });
}

module.exports = {
    scanNetwork,
    portScan,
    serviceDiscovery
};
