
## app(Host App)

Node Version Manager (NVM), as the name implies, is a tool for managing Node versions on your device. Different projects on your device may be using different versions of Node. Using only one version (the one installed by npm ) for these different projects may not give you accurate execution results.

To create a similar project.

```bash
nvm use 16.14.1
npx create-react-app app --template typescript
cd app
npm i --save-dev @chakra-ui/react @emotion/react @emotion/styled framer-motion webpack webpack-cli html-webpack-plugin webpack-dev-server babel-loader
```

## [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

In the project directory, you can run:

## [webpack.config.js](https://webpack.js.org/configuration/)

## react-app-env.d.ts

References:<br>
[Node.js](https://nodejs.org/en/docs/)<br>
[Create React App](https://create-react-app.dev/)<br>
[Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)<br>
[Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)<br>
[Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)<br>
