import config from './config.json'

const getStateDistribution = async () => {
    console.log("Enter fetcher.js");
    var res = await fetch(`http://${config.server_host}:${config.server_port}/`, {
        method: 'GET',
    })
    return res.json()
}

export {
    getStateDistribution,
}