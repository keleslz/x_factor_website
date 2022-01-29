/**
 * Global config available on app and not sensitive
 */
let config = {};

if(process.env.NODE_ENV === 'development') {
    config = {
        DOMAIN_NAME : 'http://localhost:8000',
        ADDRESS_CONTRACT : '0x5FbDB2315678afecb367f032d93F642f64180aa3'
    }
}else {
    config = {
        DOMAIN_NAME : 'https://api-x-factor.sideskill.fr',
        ADDRESS_CONTRACT : ''
    }
}

export default config
