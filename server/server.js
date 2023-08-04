// express server setup
import express, { json } from 'express';
import cookieParser from 'cookie-parser';

import { resolve } from 'path';

// route imports
import apiRouter from './routers/apiRouter.js';
import userRouter from './routers/userRouter.js';

// database connection
import connectDB from './db/db.js';

// const declarations
const app = express();

const PORT = 3333; // from josh's branch

connectDB(); /// uncomment to connect to DB

// parse request body
app.use(json());
app.use(cookieParser());

app.use('/api', apiRouter);
app.use('/user', userRouter);
// just to get something running
app.get((req, res) => {
  return res.status(200).sendFile(resolve(__dirname, '../index.html'));
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
// hi
//listens on port 3000 -> http://localhost:3000/
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
