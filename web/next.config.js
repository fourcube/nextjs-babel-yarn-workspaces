const path = require('path');
const withPlugins = require('next-compose-plugins');
const customBabelConfig = require("next-plugin-custom-babel-config");

const plugins = [
    [customBabelConfig, { babelConfigFile: path.resolve("../babel.config.js") }]
]

module.exports = withPlugins(plugins, {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /lib/,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: 'babel-loader',
                    options: {
                        rootMode: "upward",
                    }
                },
            ],
        })

        return config;
    },
})