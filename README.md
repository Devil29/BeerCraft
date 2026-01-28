This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

## Installation

In the project directory, run:

### `npm install`

To install all the required dependencies.

## Available Scripts

In the project directory, you can run:


### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Tech Stack

- **React** 17.0.2
- **Redux** 4.2.1 (State Management)
- **React Router** 5.3.4 (Routing)
- **Axios** 1.6.0 (HTTP Client)
- **Sass** 1.69.0 (Styling)

## Project Structure

```
src/
├── components/          # React components
│   ├── css/            # SCSS stylesheets
│   ├── Home.js
│   ├── Login.js
│   ├── CartPage.js
│   └── ...
├── store/              # Redux store configuration
│   ├── actions/       # Redux actions
│   └── reducers/      # Redux reducers
├── assets/             # Images and static assets
└── utils/              # Utility functions
```

## To Do Tasks
- [ ] Banner on Home page
- [ ] Sign up Login flow
- [ ] Cart Page 
- [ ] Display number of element in car in Header
- [ ] Payment Gateway Integration
- [ ] Order History