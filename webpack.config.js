const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fse = require('fs-extra');

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-hexrgba'),
    require('autoprefixer')
];

class RunAfterCompile{
    apply(compiler){
        compiler.hooks.done.tap('Copy images!', () =>{
            // changed 'docs' => 'dist'
            // Hosting on netlify
            fse.copySync('./app/assets/images', './dist/assets/images');
        });
    }
}

let cssConfig = { 
    test: /\.css$/i,
    use: ['css-loader?url=false', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins }} } ]
}

let pages = fse.readdirSync('./app').filter( file => {
    return file.endsWith('.html')
}).map( page => {
    return new HtmlWebpackPlugin({
        filename: `${page}`,
        template: `./app/${page}`
    });
});


let config = {
    entry: './app/assets/scripts/App.js',    
    plugins: pages,
    module: {
        rules: [
            cssConfig
        ]
    }
}
if(currentTask == 'dev'){
    cssConfig.use.unshift('style-loader');
    config.output= {
        filename: 'bundled.js', 
        path: path.resolve(__dirname, 'app')
    },
    config.devServer = {
        before: function(app, server){
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },
    config.mode = 'development'
}

if(currentTask == 'build'){
    config.module.rules.push({
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    })

    cssConfig.use.unshift(MiniCssExtractPlugin.loader)
    config.output= {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
            // changed 'docs' => 'dist'
            // Hosting on netlify
        path: path.resolve(__dirname, 'dist')
    }
    config.mode = 'production'
    config.optimization = {
        splitChunks: {chunks: 'all'},
        // css-minimizer-webpack-plugin only working with Firefox for some reason.
        // Leaving this false until a solution / workaround is found.

        // TODO: Find minification solution
        minimize: false,
        minimizer: [`...`, new CssMinimizerPlugin()]
    }
    config.plugins.push( 
        new CleanWebpackPlugin(), 
        new MiniCssExtractPlugin({filename:'styles.[chunkhash].css'}),
        new RunAfterCompile()
        );
}

module.exports = config;