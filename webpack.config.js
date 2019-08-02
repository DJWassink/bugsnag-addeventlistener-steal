const config = {
    entry: {
        test: './test.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/js',
    },
};

module.exports = config;
