import React, { useContext } from 'react';
import { ThemeContext } from '../ClusterView/ClusterViewHeader/themeContext';
import LinkedIn from '../../assets/In-Blue-96.png';
import Github from '../../assets/github-mark.png';
import LinkedInDark from '../../assets/In-White-96.png';
import GithubDark from '../../assets/github-mark-white.png';
import screenShot1Dark from '../../assets/selected_1_Dark.png';
import screenShot1Light from '../../assets/selected_1_Light.png';
import screenShot2Dark from '../../assets/selected_4_dark.png';
import screenShot2Light from '../../assets/selected_4_light.png';
import screenShot3Dark from '../../assets/selected_5_dark.png';
import screenShot3Light from '../../assets/selected_5_light.png';

export default function LandingMain() {
  const { theme, setTheme } = useContext(ThemeContext);

  const introText = `Welcome to Prism, your powerful Kubernetes visualizer. Effortlessly explore and monitor vital metrics for data-driven decisions. Leveraging Prometheus and Grafana, Prism delivers real-time insights, ensuring optimal performance and seamless monitoring.`;

  const features = [
    'OAuth',
    'Interactive Grafana Visualizations',
    'Seamless Prometheus Integration',
    'Detailed Cluster Insights',
  ];

  const meetTheTeam = [
    {
      name: 'Beserat Tafesse',
      photoURL:
        'https://ca.slack-edge.com/T04T7FR40G1-U056W6M6VE1-e5babfb06bf4-512',
      linkedIn: 'https://www.linkedin.com/in/beserat-tafesse-b12a38165/',
      github: 'https://github.com/BeseratT',
    },
    {
      name: 'Josh Hall',
      photoURL:
        'https://ca.slack-edge.com/T04T7FR40G1-U056G0R31TL-a45468e4ce49-512',
      linkedIn: 'https://www.linkedin.com/in/joshuarhall0/',
      github: 'https://github.com/joshuarhall',
    },
    {
      name: 'Paul Glenn',
      photoURL:
        'https://ca.slack-edge.com/T04T7FR40G1-U053Y6VG5V1-ae16a90049bb-512',
      linkedIn: 'https://www.linkedin.com/in/paul-glenn-b35a2b25/',
      github: 'https://github.com/paglenn',
    },
    {
      name: 'James Li',
      photoURL:
        'https://ca.slack-edge.com/T04T7FR40G1-U054H0TQB3M-9119e825a7b4-512',
      linkedIn: 'https://www.linkedin.com/in/jamesli0226/',
      github: 'https://github.com/Jxmes-Li',
    },
    {
      name: 'Dawit Merid',
      photoURL:
        'https://ca.slack-edge.com/T04T7FR40G1-U04TA9ZPL83-b424442d574b-512',
      linkedIn: 'http://www.linkedin.com/in/dawit-merid-0358ab143',
      github: 'https://github.com/dawitmerid',
    },
  ];

  return (
    <main className='min-h-full bg-[var(--primary-white)] dark:bg-[var(--secondary)] dark:text-[var(--primary)]  '>
      {/* Hero Section */}
      <section
        id='overview'
        className=' flex flex-col items-center md:flex-row gap-9 py-48 px-10 md:px-32'
      >
        <div className=' md:w-1/2 bg-sky-500 rounded-sm flex items-center justify-center '>
          something
        </div>
        <p className='md:w-1/2 text-2xl text-justify'>{introText}</p>
      </section>
      {/* END OF Hero Section */}
      {/*  Features Section */}
      <section
        id='features'
        className=' scroll-mt-24 mt-10  bg-[var(--primary-grey)] dark:bg-[var(--secondary)] '
      >
        {/* container for centering purpose */}
        <div className='py-10 px-10 md:px-32 flex flex-col items-center '>
          {' '}
          <h2 className='text-3xl mb-5'>Features</h2>
          {/*  */}
          <div className='grid grid-cols-2 gap-4 '>
            {features.map((feature, index) => (
              <h3
                key={index}
                className='border border-[var(--secondary)] rounded-sm p-8 text-center dark:border-[var(--primary)] '
              >
                {feature}
              </h3>
            ))}
          </div>
          {/* screen shots */}
          <div className='mt-24 h-fit flex flex-col gap-4 justify-center items-center '>
            <div className='flex '>
              <img
                className='rounded shadow-[5px_5px_6px_0px_rgba(0,0,0,0.3)]  '
                src={theme === 'dark' ? screenShot1Light : screenShot1Dark}
                alt='screenshot'
              />
            </div>
            <div className='flex gap-4 items-center justify-center '>
              <img
                className='rounded w-1/2 shadow-[5px_5px_6px_0px_rgba(0,0,0,0.3)] '
                src={theme === 'dark' ? screenShot2Light : screenShot2Dark}
                alt='screenshot'
              />
              <img
                className='rounded w-1/2 shadow-[5px_5px_6px_0px_rgba(0,0,0,0.3)] '
                src={theme === 'dark' ? screenShot3Light : screenShot3Dark}
                alt='screenshot'
              />
            </div>
          </div>
        </div>
      </section>
      {/*  END OF Features Section */}
      {/*  START OF GETTING STARTED */}
      <section
        id='getting-started'
        className='scroll-mt-24 mt-10  mb-20 bg-[var(--white)] flex flex-col items-center justify-center '
      >
        <h2 className='text-3xl mb-5 '>Get Started</h2>
        <div className='grid grid-cols-2  gap-10 items-center justify-center'>
          <div className='flex flex-col '>
            <h2>Check out our Github page and follow the Read Me file.</h2>
          </div>
          <div className='flex flex-col '>
            <h2>Check out our Medium Article</h2>
          </div>
        </div>
      </section>
      {/*  END OF GETTING STARTED */}
      {/*  START of MEET The Team */}
      <section
        id='team'
        className='scroll-mt-24 mt-10  py-6 bg-[var(--primary-grey)] dark:bg-[var(--secondary)] flex flex-col items-center justify-center  '
      >
        <h2 className='text-3xl mb-5 '>Meet The Team</h2>
        {/* one person */}
        <div className='flex flex-col md:flex-row'>
          {meetTheTeam.map((person, index) => (
            <div
              key={index}
              className=' my-4 rounded-sm flex flex-col items-center justify-center  h-auto'
            >
              <h3 className='text-2xl text-center'>{person.name}</h3>
              <div className='flex items-center justify-center'>
                <img
                  className='w-5/6 rounded shadow-[5px_5px_6px_0px_rgba(0,0,0,0.3)]'
                  src={person.photoURL}
                  alt='team-member-pic'
                />
              </div>
              <ul className='flex flex-col items-center gap-3 sm:flex-row  py-1 my-1 '>
                <li className='w-7 h-7 p-0 m-0'>
                  <a href={person.linkedIn} target='_blank'>
                    <img
                      src={theme === 'dark' ? LinkedInDark : LinkedIn}
                      alt='LinkedIn Logo'
                      className=' p-0 m-0 '
                    />
                  </a>
                </li>
                <li className='w-7 h-7 p-0 m-0'>
                  <a href={person.github} target='_blank'>
                    <img
                      src={theme === 'dark' ? GithubDark : Github}
                      alt='Github Logo'
                      className='p-0 m-0 '
                    />
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
        {/* END OF one person */}
      </section>
      {/*  END OF MEET THE TEAM */}
    </main>
  );
}
