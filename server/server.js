const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000; // from josh's branch

// convert request body, etc.  to JSON
app.use(express.json());
const metricsController = require('./controllers/metricsController');

// serve static files (just CSS right now)
// app.use(express.static('client')) // from josh

// just to get something running
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

// test button request from index.html
app.get('/testBtn', metricsController.testButton, (req, res) => {
  return res.status(200).send({ message: 'Express button test complete' });
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
