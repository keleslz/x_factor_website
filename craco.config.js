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
            '@data' : path.resolve(__dirname, 'src/data'),
            '@components' : path.resolve(__dirname, 'src/components'),
            '@layouts' : path.resolve(__dirname, 'src/layouts'),
            '@utils' : path.resolve(__dirname, 'src/utils'),
            '@app' : path.resolve(__dirname, 'src/app'),
            '@redux' : path.resolve(__dirname, 'src/redux'),
        }
    }
}
