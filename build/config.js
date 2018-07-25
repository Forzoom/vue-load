module.exports = exports = [
    {
        input: './src/index.js',
        output: {
            file: './dist/vue-load.esm.js',
            format: 'es',
        },
    },
    {
        input: './src/index.js',
        output: {
            file: './dist/vue-load.cjs.js',
            format: 'cjs',
        },
    },
    {
        input: './src/index.js',
        output: {
            file: './dist/vue-load.js',
            name: 'Schema',
            format: 'umd',
        },
    },
];