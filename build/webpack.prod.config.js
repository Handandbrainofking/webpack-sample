const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

const prodConfig = {
    output: {},
    optimization: {
      minimizer: [],
      splitChunks: {},
    },
    plugins: [],
}
module.exports = merge(baseConfig, prodConfig)
