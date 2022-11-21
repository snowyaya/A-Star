import config from './config.json'

const getCompanyAngelSeedFunding = async () => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/company_funding`, {
        method: 'GET',
    })
    return res.json()
}

export {
    getCompanyAngelSeedFunding
}