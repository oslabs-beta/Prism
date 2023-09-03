import React, { useState, FC, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

import { ThemeProvider } from "./ClusterView/ClusterViewHeader/themeContext";
import Dashboard from "./ClusterView/Dashboard";

interface Props {}

const App: FC<Props> = () => {
  const [user, setUser] = useState({});
  const [rerender, setRerender] = useState(false);
  const navigate = useNavigate();

  // effect hook will get access token if
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");
    console.log(codeParam);

    if (codeParam && localStorage.getItem("accessToken") === null) {
      async function getAccessToken() {
        await fetch("/user/getAccessToken?code=" + codeParam, {
          method: "GET",
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);

            if (data.access_token) {
              localStorage.setItem("accessToken", data.access_token);
              setRerender(!rerender);
              navigate("/dashboard");
            }
          });
      }
      getAccessToken();
    }
  }, []);

  return (
    <>
      <div>
        <ThemeProvider initialTheme={"dark"}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </ThemeProvider>
      </div>
    </>
  );
};

export default App;
