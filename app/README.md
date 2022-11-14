
## app(Host App)

To create a similar project.

```bash
nvm use 16.14.1
npx create-react-app app --template typescript
cd app
npm i --save-dev @chakra-ui/react @emotion/react @emotion/styled framer-motion webpack webpack-cli html-webpack-plugin webpack-dev-server babel-loader
```
Note:[Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) is used for managing Node versions on our device.

## [webpack.config.js](https://webpack.js.org/configuration/)

```bash
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    port: 8000,
    hot :true,
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            [
              "@babel/preset-env",
              { targets: { browsers: "last 2 versions" } },
            ],
            "@babel/preset-typescript",
            "@babel/preset-react",
          ],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app",
      remotes: {
        backscreen: "backscreen@http://localhost:8001/remoteEntry.js",
        frontscreen: "frontscreen@http://localhost:8002/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
```

## [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

```bash
{
	"compilerOptions": {
		"target": "es5",
		"lib": ["dom", "dom.iterable", "esnext"],
		"baseUrl": "./",
		"allowJs": true,
		"skipLibCheck": true,
		"esModuleInterop": true,
		"allowSyntheticDefaultImports": true,
		"strict": true,
		"forceConsistentCasingInFileNames": true,
		"noFallthroughCasesInSwitch": true,
		"module": "esnext",
		"moduleResolution": "node",
		"resolveJsonModule": true,
		"isolatedModules": false,
		"sourceMap": true,
		"noEmit": false,
		"jsx": "react-jsx"
	},
	"include": ["src"]
}
```

## react-app-env.d.ts




References:<br>
[Node.js](https://nodejs.org/en/docs/)<br>
[Create React App](https://create-react-app.dev/)<br>
[Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)<br>
[Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)<br>
[Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)<br>
