import axios from "axios";
export const checkGitHubToken = (
  navigate: Function
) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const codeParam = urlParams.get("code");

  if (codeParam && localStorage.getItem("accessToken") === null) {
    async function getAccessToken() {
      await axios
        .get(`/user/getAccessToken?code=${codeParam}`)
        .then((response) => response.data)
        .then((data) => {
          console.log("data: ", data);

          if (data.access_token) {
            localStorage.setItem("accessToken", data.access_token);
            navigate("/dashboard");
          }
        });
    }
    getAccessToken();
  }
};
