const { gateway4async, gateway6async } = require('default-gateway');

async function getGatewayInfo() {
  try {
    const [ipv4Result, ipv6Result] = await Promise.allSettled([
      gateway4async(),
      gateway6async()
    ]);

    return {
      ipv4: ipv4Result.status === 'fulfilled' ? ipv4Result.value : null,
      ipv6: ipv6Result.status === 'fulfilled' ? ipv6Result.value : null
    };
  } catch (error) {
    console.error('Gateway detection error:', error);
    throw error;
  }
}

module.exports = { getGatewayInfo };
