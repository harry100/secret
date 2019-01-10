const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
   entry: './react/index.js',
   devtool: "source-map",
   mode: 'development',

   output: {
      path: path.join(__dirname, '/static'),
      filename: 'bundle.js'
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" },
        ],
         }
      ]
   },
   plugins:[
      new WebpackNotifierPlugin({alwaysNotify: true})
   ]
}
