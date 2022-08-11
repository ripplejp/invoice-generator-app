# Invoice Generator (FORM TO PDFs) Using React and NodeJS

## Project Setup

### Client Side

1. Create a new React App `create-react-app client && cd client`
2. Save the necessary dependencies `npm i -S axios file-saver`
3. Add proxy inside of client/package.json `“proxy”: “http://localhost:5000/"`
4. `run npm start`

### Server Side

1. Create an Express server `mkdir server && cd server && touch index.js && npm init`
2. save the necessary dependencies `npm i -S express body-parser cors html-pdf`
3. `run nodemon index.js`
