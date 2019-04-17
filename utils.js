exports.pages = function(env) {
    const HtmlWebpackPlugin= require('html-webpack-plugin');
    const fs = require('fs');
    const path = require('path');
    const appFolder = path.resolve(__dirname, './src/app/pages')

    var pages = [];
    
    fs.readdirSync(appFolder).forEach( view => {
        const viewName = view.split('.')[0];

        const options = {
            fileName: `${viewName}/index.html`,
            template: `src/app/pages/${view}`,
            inject: true
        };

        if (env === 'development') {
            options.minify = {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            };
        }

        pages.push(new HtmlWebpackPlugin(options));
    });

    return pages;
};
