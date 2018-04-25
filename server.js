const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const weboackHotMiddleware = require("webpack-hot-middleware");
const config = require('./webpack.express');

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));
app.use(weboackHotMiddleware(compiler));

app.listen(3000, function () {
  console.log('server start at port 3000\n');
});
