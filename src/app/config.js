/**
 * Global config available on app and not sensitive
 */
let config = {};

if(process.env.NODE_ENV === 'development') {
    config = {
        DOMAIN_NAME : 'http://localhost:8000'
    }
}else {
    config = {
        DOMAIN_NAME : 'https://x-factor.sideskill.fr'
    }
}

export default config
