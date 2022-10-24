import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MeetTheTeam from './components/MeetTheTeam.jsx';
import App from './components/App.js';
import reportWebVitals from './reportWebVitals';
// import { render } from "react-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//   },
// ]);
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// import your route components too

// ReactDOM.createRoot(document.getElementById('root').

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route path="teams" element={<MeetTheTeam />} />
//         <Route path="*" element={<p>Path not resolved</p>} />
//         {/* <Route path="teams" element={<Teams />}>
//           <Route path=":teamId" element={<Team />} />
//           <Route path="new" element={<NewTeamForm />} />
//           <Route index element={<LeagueStandings />} /> */}
//         {/* </Route> */}
//       </Route>
//     </Routes>
//   </BrowserRouter>
//   // document.getElementById("root")
//   // const root = ReactDOM.createRoot(document.getElementById('root'));
//   );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
