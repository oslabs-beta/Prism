import { githubLogin } from "../utils/githubLogin";
import React, { FC } from "react";
interface signProps {
  type: string;
}
export const GitHubSignIn: FC<signProps> = ({ type }) => {
  return (
    <button onClick={(e) => githubLogin(e)}>Sign {type} with GitHub</button>
  );
};
