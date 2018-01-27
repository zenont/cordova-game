"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
exports.default = function (env) {
    return {
        entry: path_1.join(__dirname, '../index.ts'),
        output: {
            filename: 'index.js',
            path: path_1.join(__dirname, '../../www/js/')
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [{
                test: /\.ts(x?)$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [['env', { modules: false, targets: { browsers: ['last 2 major versions'] } }]],
                        plugins: ['transform-class-properties', 'transform-decorators-legacy', 'transform-object-rest-spread'],
                        babelrc: false
                    }
                }, { loader: 'ts-loader' }]
            }]
        }
    };
};
//# sourceMappingURL=config.js.map