import webpack, { Configuration, NewModule, LoaderRule } from 'webpack'
import { join } from 'path'

export default (env: any): Configuration => {
    return {
        entry: join(__dirname, '../index.ts'),
        output: {
            filename: 'index.js',
            path: join(__dirname, '../../www/js/')
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: <NewModule>{
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: [/node_modules/],
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: [['env', { modules: false, targets: { browsers: ['last 2 major versions'] } }]],
                            plugins: [
                                'transform-class-properties',
                                'transform-decorators-legacy',
                                'transform-object-rest-spread',
                            ],
                            babelrc: false
                        }
                    },
                    { loader: 'ts-loader' }]
                }]
        }
    }
}