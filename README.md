This project is an example to show how backstop can be integrated with a react project.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [https://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run visual-test`

Launches backstop test and opens up the result report in default browser.
>**Note:** The app should be running before executing this command.

### `npm run visual-approve`
Approve the changes in visual regression test.

### `npm run visual-reference`
Makes initial visual references of your app.
>**Note:** The app should be running before executing this command.

### `npm run visual-ci`
Run visual regression test in CI. This script will automatically start the app and then run visual regression test against it, and would exit with code 0 (success) or 1 (fail) depending on the result. No browser will be opened during start or after end of the test.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
