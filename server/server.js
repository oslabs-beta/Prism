const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// convert request body, etc.  to JSON
app.use(express.json());

// just to get something running
app.get('/', (req, res) => {
  return res.status(200).send(path.resolve(__dirname, '../client/index.html'));
});

// catch all route
app.get('*', (req, res) => {
  return res.status(404).send('Page Not Found!');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//listens on port 3000 -> http://localhost:3000/
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
