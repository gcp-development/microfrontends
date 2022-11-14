
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
