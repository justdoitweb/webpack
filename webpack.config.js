var ExtractTextPlugin= require("extract-text-webpack-plugin");
module.exports = {
  entry: ['./app/global.js' , './app/util.js' , './app/global.css'],
 /* entry: {
    "css": "./app/global.css",
    "script": ['./app/global.js' , './app/util.js']
  },*/
  output: {
    filename: 'script.min.js',
    path: './app'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'jsx-loader?harmony'
      },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
      //{ test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } ,// inline base64 URLs for <=8k images, direct URLs for the rest
      {
          test:'./js/global',
          loader: 'expose?global'
      },
      {
          test:'./js/jquery-1.11.3.min',
          loader: 'expose?jQuery'
      },
      {
          test:'./js/nectworkConnect',
          loader: 'expose?connetJson,connnetServer'
      }
    ]
  },
  resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modulesDirectories: [
          'node_modules'
        ]        
    },
   externals: {
          "jquery": "jQuery",
          "jquery": "$"
            
    },
   plugins: [
      //new webpack.optimize.UglifyJsPlugin({minimize: true}),
      new ExtractTextPlugin("./style.min.css")
   ]
};
//开发环境判断
if(process.env.NODE_ENV==''){
  
}
