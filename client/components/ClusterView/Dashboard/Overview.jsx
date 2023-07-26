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
  // effect hook
  React.useEffect(() => {
    getURL()
      .then((urlString) => {
        const frameArray = [];
        const panelIdArray = [1,5,3,4]; // the panels we want to access
        // console.log('effect hook running: ', urlString);
        if (urlString) {
          // iterate through panel ids that we want and edit the url for each one , pushing to panels array
          panelIdArray.forEach((id) =>
            frameArray.push(
              <Iframe
                key={id}
                className='overviewpanels'
                url={urlString.replace('panelId=1', `panelId=${id}`)}
              />
            )
          );
        }
        // state hook updates array
        updateFrames(frameArray);
      })
      .catch((err) => console.log(`Error in effect hook: \n ${err}`));
  }, []);

  return (
    <main className='flex flex-col'>
      <h1>OverView Overiew</h1>
      {/* render iframes */}
      {frames}
    </main>
  );
};

export default OverView;
