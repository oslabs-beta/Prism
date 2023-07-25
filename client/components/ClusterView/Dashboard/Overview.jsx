import React from 'react';
import Iframe from 'react-iframe';
const getURL = async () => {
  const urlObj = await fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
  // return url string from object
  return urlObj.frameURL;
};

const OverView = () => {
  const [frames, updateFrames] = React.useState([]);
  // create array of iframe elements with source frameURL, changing the number each time (we'll use 5+6 )
  // first we can hardcode the array
  // const url = await getURL(); // contains url string
  // console.log('url: ', url);
  // const iframeArray = [
  //   <Iframe url={url ? url.replace('panelId=1', 'panelId=5') : ''} />,
  // ];
  // console.log('iframe array ', iframeArray);
  React.useEffect(() => {
    getURL()
      .then((urlString) => {
        const frameArray = [];
        console.log('effect hook running: ', urlString);
        if (urlString) {
          frameArray.push(
            <Iframe url={urlString.replace('panelId=1', 'panelId=5')} />
          );
        }
        console.log('frame Array: ', frameArray);
        updateFrames(frameArray);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className='flex flex-col'>
      {/* {iframeArray} */}
      <h1>OverView Overiew</h1>
      {frames}
    </main>
  );
};

export default OverView;
