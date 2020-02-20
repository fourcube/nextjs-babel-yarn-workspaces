# Next.js + Babel Monorepo

To run this:

`yarn`
`yarn --cwd web dev`

## Keypoints that make this work

`web/next.config.js` points to the root `babel.config.js`. For all sibling modules it forces `babel-loader` to use `rootMode: "upward"` so the modules discover the root `babel.config.js`. All babel configuration is hoisted into the root `babel.config.js` by providing `overrides` for each module.