## backscreen(Micro App)

To create a similar project.

```bash
nvm use 16.14.1
npx create-react-app backscreen --template typescript
cd backscreen
npm i --save-dev @chakra-ui/react @emotion/react @emotion/styled framer-motion webpack webpack-cli html-webpack-plugin webpack-dev-server ts-loader
```
Note:[Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) is used for managing Node versions on our device.

```bash
nvm use 16.14.1
npm start
```

## [webpack.config.js](https://webpack.js.org/configuration/)

```bash
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    port: 8001,
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
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "backscreen",
      filename: "remoteEntry.js",
      exposes: {
        "./Backscreen": "./src/App",
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
    "noEmit": false,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

## Exposing the component

![image](https://user-images.githubusercontent.com/76512851/201610169-1adae68a-7304-4882-a52e-7941190672df.png)

<hr>

References:<br>
[Node.js](https://nodejs.org/en/docs/)<br>
[Create React App](https://create-react-app.dev/)<br>
[Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)<br>
[Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)<br>
[Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)<br>
