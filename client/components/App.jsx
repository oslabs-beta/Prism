import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import AppIntro from './AppIntro.jsx';
import Header from './Header.jsx';
import ClusterView from './ClusterView/ClusterView.jsx';
import '../styles.css';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState({});

  return (
    <div className='grid items-center'>
      {/* <Router> */}
      <ClusterView />
      {/* </Router> */}
    </div>
    // <>
    //   <div>
    //     <h1>hello hello heloo</h1>
    //     <Routes>
    //       <Route path='/' element={<Header />}>
    //         <Route index element={<AppIntro />}></Route>
    //       </Route>
    //     </Routes>
    //   </div>
    // </>
  );
}

// <div>
//   <Routes>
//     <Route path="/" element={<Layout user={user} setUser={setUser} />}>
//       <Route index element={<AppIntro />}></Route>
//       <Route path='/login' element={<Login />}></Route>
//       <Route path='/signup' element={<Signup />}></Route>
//       {/* <Route path='/linkedin' element={<LinkedIn />}></Route>
//           <Route path='/github' element={<Github />}></Route> */}
//     </Route>
//   </Routes>
// </div>
