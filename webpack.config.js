var path = require("path");
module.exports = {
    entry: {
        'test-prefix': ["./app/test-prefix/main.js"],
        'test-link-state-mixin' : ["./app/test-link-state-mixin/main.js"]
    },
    module : {
        loaders : [
            {
                test: /(\.js|\.jsx)$/,
                loaders: ['babel?compact=false'],
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "[name].bundle.js"
    }
};