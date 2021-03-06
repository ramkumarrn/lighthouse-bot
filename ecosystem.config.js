const path = require('path');

module.exports = {
    apps: [{
        name: 'lighthouse-bot',
        script: 'src/index.js',
        instances: 1,
        autorestart: true,
        watch: process.env.NODE_ENV !== 'production' ? path.resolve(__dirname) : false,
        node_args: ['--experimental-worker'],
        max_memory_restart: '1G'
    }]
};
