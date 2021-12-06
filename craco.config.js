const path = require('path');

module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
    webpack : {
        alias : {
            '@src' : path.resolve(__dirname, 'src/'),
            '@assets' : path.resolve(__dirname, 'src/assets'),
            '@data' : path.resolve(__dirname, 'src/data')
        }
    }
}
