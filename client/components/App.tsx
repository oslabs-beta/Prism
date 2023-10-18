import React, { useState, FC, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { checkGitHubToken } from "../../client/features/oauth";
import { ThemeProvider } from "./ClusterView/ClusterViewHeader/themeContext";
import Dashboard from "./ClusterView/Dashboard";

interface Props {}

const App: FC<Props> = () => {
  const [user, setUser] = useState({});
  const [rerender, setRerender] = useState(false);
  const navigate = useNavigate();

  // effect hook will get access token if
  useEffect(() => checkGitHubToken(navigate), []);

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
