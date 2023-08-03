import React, { useState } from 'react';

// import { Root } from 'postcss';

// const getURL = async () => {
//   const urlObj = await fetch('/api', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then((response) => response.json());
//   // return url string from object
//   return urlObj.frameURL;
// };

const OverView = ({ frames }) => {
  // const [frames, updateFrames] = React.useState([]);

  // create array of iframe elements with source frameURL, changing the number each time (we'll use 5+6 )
  // first we can hardcode the array
  // const url = await getURL(); // contains url string
  // console.log('url: ', url);
  // const iframeArray = [
  //   <Iframe url={url ? url.replace('panelId=1', 'panelId=5') : ''} />,
  // ];
  // console.log('iframe array ', iframeArray);
  // effect hook
  // React.useEffect(() => {
  //   getURL()
  //     .then((urlString) => {
  //       const frameArray = [];
  //       const panelIdArray = [1, 3, 4, 5, 6]; // the panels we want to access
  //       // console.log('effect hook running: ', urlString);
  //       if (urlString) {
  //         // iterate through panel ids that we want and edit the url for each one , pushing to panels array
  //         panelIdArray.forEach((id) =>
  //           frameArray.push(
  //             <Iframe
  //               key={id}
  //               className={`rounded w-52 h-64  panel${id}`}
  //               url={urlString.replace('panelId=1', `panelId=${id}`)}
  //               // width='500'
  //               // height='250'
  //             />
  //           )
  //         );
  //       }
  //       // state hook updates array
  //       updateFrames(frameArray);
  //     })
  //     .catch((err) => console.log(`Error in effect hook: \n ${err}`));
  // }, []);

  return (
    // <>
    //   <RootLayout
    //     setViewOverview={setViewOverview}
    //     setViewNode={setViewNode}
    //     setViewPods={setViewPods}
    //     setViewClusterMap={setViewClusterMap}
    //   />

    <div className=' panelContainer '>{frames}</div>
    // </>
  );
};

export default OverView;
