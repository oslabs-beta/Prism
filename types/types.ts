import { RequestHandler } from 'express';
interface middlewareError {
  log: string;
  status: number;
  message?: { error: string };
}

interface Controller {
  [middlewareFn: string]: RequestHandler;
}

interface ThemeProps {
  initialTheme: string;
  children: any;
}

type LUser = {
  username: string;
  password?: string;
  auth?: boolean;
  created?: boolean;
};

export { middlewareError, Controller, ThemeProps, LUser as LocalUser };
