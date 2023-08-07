import React, { useEffect } from "react";

export default function AppIntro() {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");
    console.log(codeParam);
  }, []);

  return (
    <>
      <div> | </div>
      <div> | </div>
      <div> | </div>
      <div> | </div>
      <h1>This is start of landing page</h1>
      <div>Welcome to Prism</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus
        at odio neque consequatur autem impedit sed expedita est dolore amet
        quod quo debitis quae reiciendis temporibus optio, totam placeat.
      </p>
      <div> State of the Art Kubernetes Cluster Visualizer </div>
    </>
  );
}
