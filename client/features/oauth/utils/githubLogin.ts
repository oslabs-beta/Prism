import { SyntheticEvent } from "react";
const CLIENT_ID = "a62670300c9169ebd3b3";
export const githubLogin = (event: SyntheticEvent) => {
  event.preventDefault();
  window.location.assign(
    "https://www.github.com/login/oauth/authorize?client_id=" + CLIENT_ID
  );
};
