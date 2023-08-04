// express server setup
import express, { NextFunction, Request, Response, json } from 'express';
import cookieParser from 'cookie-parser';

import { resolve } from 'path';

// route imports
import apiRouter from './routers/apiRouter.js';
// import userRouter from './routers/userRouter.js';

// database connection
import connectDB from './db/db.js';

// const declarations
const app = express();

const PORT = 3333; // from josh's branch

// connectDB() ; /// uncomment to connect to DB

type ServerError = {
  log: string,
  status: number,
  message: { err: string }
}

// parse request body
app.use(json());
app.use(cookieParser());

// serve static files (just CSS right now)
// app.use(express.static('client')) // from josh
app.use('/api', apiRouter);
// app.use('/user', userRouter);
// just to get something running
app.get('/', (req, res) => {
  return res.status(200).sendFile(resolve(__dirname, '../index.html'));
});

// catch all route
app.get('*', (req, res) => {
  return res.status(404).send('Page Not Found!');
});

// global error handler
app.use((err: ServerError, req: Request, res: Response, next: NextFunction) => {
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
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
