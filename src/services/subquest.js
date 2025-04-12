const subquest = require('subquest');

/**
 * Get subdomains for a given host
 * @param {string} host - The host to scan for subdomains
 * @returns {Promise<string[]>} - Array of discovered subdomains
 */
const findSubdomains = (host) => {
    return new Promise((resolve, reject) => {
        subquest.getSubDomains({ host }, (err, results) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(results);
        });
    });
};

module.exports = {
    findSubdomains
};
