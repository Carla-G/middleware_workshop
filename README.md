# Setup

Install dependencies :
```sh
npm i
```
Copy the environment variables : 
```
cp .env.sample .env
```

And then change variables inside `.env` to match your own environment.
If you ever want to add an environment variable, please add them to `src/environment.js` and `.env.example`.

# Useful commands

## Develop

This will start the server and reload it when one source file changes : 

```sh
npm run dev
```

## Run a production version of the app

```sh
npm start
```

## Run the tests

```sh
npm run test
```