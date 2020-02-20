const config = {
    overrides: [{
        test: /lib/,
        ...require("./lib/.babelrc.json")
    },
    {
        test: /web/,
        ...require("./web/.babelrc.json")
    }],
    babelrcRoots: [".", "lib", "web"]
}

module.exports = config;