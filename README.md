# A multipage form example


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:ci`
Runs the test runner and generates the coverage.

### Linting commands
The following command are available for linting:
- `yarn lint-code`
- `yarn lint-styles`
- `yarn lint-commit`

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Additional notes:

In this project custom input components have been created, but for a large scale project I might consider using a component library such as material.ui for this purpose.

I considered saving state between pages in local storage to avoid data loss due to hard refresh but since the form data is sensitive information decided not to do so.

The images used here to the best of my knowledge are free for use.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
