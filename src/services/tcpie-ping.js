const { tcpie } = require('tcpie');

const tcpPing = (host, port = 22, options = {}) => {
    const defaultOptions = {
        count: 5,
        interval: 1000,
        timeout: 3000
    };

    const finalOptions = { ...defaultOptions, ...options };
    const pie = tcpie(host, port, finalOptions);
    const rtts = [];

    return new Promise((resolve, reject) => {
        pie
            .on('connect', (stats) => {
                rtts.push(stats.rtt);
                console.log(`connected to ${host}:${port} seq=${stats.sent} srcport=${stats.socket.localPort} time=${stats.rtt.toFixed(1)} ms`);
            })
            .on('error', (err) => {
                console.error(`Error connecting to ${host}:${port}:`, err.message);
            })
            .on('timeout', () => {
                console.log(`Timeout connecting to ${host}:${port}`);
            })
            .on('end', (stats) => {
                const summary = generateSummary(stats, rtts);
                console.log(summary);
                resolve({ 
                    ...stats, 
                    rtts,
                    target: { host, port }
                });
            });

        pie.start();
    });
};

const generateSummary = (stats, rtts) => {
    const { sent, success, failed, target } = stats;
    const failureRate = (failed / sent * 100).toFixed(1);

    if (rtts.length > 0) {
        const min = Math.min(...rtts);
        const max = Math.max(...rtts);
        const avg = rtts.reduce((a, b) => a + b) / rtts.length;
        const stdev = Math.sqrt(rtts.reduce((s, r) => s + Math.pow(r - avg, 2), 0) / rtts.length);

        return `\n--- ${target.host} tcpie statistics ---\n${sent} handshakes attempted, ${success} succeeded, ${failureRate}% failed\nrtt min/avg/max/stdev = ${min.toFixed(3)}/${avg.toFixed(3)}/${max.toFixed(3)}/${stdev.toFixed(3)} ms`;
    }

    return `\n--- ${target.host} tcpie statistics ---\n${sent} handshakes attempted, ${success} succeeded, ${failureRate}% failed`;
};

module.exports = tcpPing;
