const whois = require('whois-json');

const whoisLookup = async (domain) => {
    try {
        const data = await whois(domain);
        return data;
    } catch (error) {
        console.error('Error fetching WHOIS data:', error);
        throw error;
    }
}

module.exports = whoisLookup;

