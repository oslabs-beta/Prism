import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import ClusterViewHeader from './ClusterViewHeader/ClusterViewHeader';
import SidePanel from './SidePanel/SidePanel';
import OverView from './Dashboard/Overview';
import Iframe from 'react-iframe';
import NodesView from './Dashboard/NodesView';
import PodsView from './Dashboard/PodsView';
import ClusterMap from './Dashboard/ClusterMap';
import { ComponentType } from 'react';
import type { ReactNode } from 'react';

interface SidePanelProps {
  setViewOverview: (value: boolean) => void;
  setViewNode: (value: boolean) => void;
  setViewPods: (value: boolean) => void;
  setViewClusterMap: (value: boolean) => void;
}

export default function Dashboard() {
  const [viewOverview, setViewOverview] = useState<boolean>(true);
  const [viewNode, setViewNode] = useState<boolean>(false);
  const [viewPods, setViewPods] = useState<boolean>(false);
  const [viewClusterMap, setViewClusterMap] = useState<boolean>(false);

  const [frames, updateFrames] = React.useState<Array<ReactNode | null>>([
    null,
  ]);

  const getURL = async (): Promise<string> => {
    const urlObj = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
    // return url string from object
    return urlObj.frameURL;
  };

  React.useEffect(() => {
    getURL()
      .then((urlString) => {
        const frameArray = [];
        const panelIdArray = ['1', '3', '4', '5', '6']; // the panels we want to access
        // console.log('effect hook running: ', urlString);
        if (urlString) {
          // iterate through panel ids that we want and edit the url for each one , pushing to panels array
          panelIdArray.forEach((id) =>
            frameArray.push(
              <Iframe
                key={id}
                className={`rounded w-52 h-64  panel${id}`}
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
    <div className=' flex flex-col  sm:grid sm:grid-areas-layout sm:grid-cols-layout sm:grid-rows-layout min-h-screen '>
      {' '}
      <header className='bg-[var(--primary-white)]  dark:bg-[var(--secondary)]  px-6 py-7  mb-0 sm:px-10 sm:grid-in-header  sm:justify-end sm:grid sm:auto-rows-max dark:bg[var(--secondary)] border-b-[3px] border-[var(--primary-grey)]  dark:border-[var(--primary)]'>
        <ClusterViewHeader />
      </header>
      <section className='h-[10rem] sm:h-full bg-[var(--primary-grey)] sm:grid-in-sidebar sm:justify dark:text-[var(--primary)] dark:bg-[var(--secondary)] drop-shadow-2xl dark:drop-shadow-3xl '>
        <SidePanel
          setViewOverview={setViewOverview}
          setViewNode={setViewNode}
          setViewPods={setViewPods}
          setViewClusterMap={setViewClusterMap}
        />
      </section>
      <main
        className=' bg-[var(--primary-white)]  text-[var(--secondary)] dark:bg-[var(--secondary)] sm:grid-in-main  dark:text-[var(--primary)]  panelContainerBig  
      '
      >
        {viewOverview ? <OverView frames={frames} /> : null}
        {viewNode ? <NodesView /> : null}
        {viewPods ? <PodsView /> : null}
        {viewClusterMap ? <ClusterMap /> : null}
      </main>
    </div>
  );
}
