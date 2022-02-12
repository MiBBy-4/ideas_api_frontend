import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Typography } from '@mui/material';
import axios from 'axios';
import IdeaList from './Idea/IdeaList';
import Registration from './auth/Registration';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  const [loggedInStatus, setStatus] = useState('NOT_LOGGED_IN');
  const [user, setUser] = useState({});

  function checkLoginStatus() {
    axios
      .get(`${process.env.REACT_APP_API_URL}users/logged_in`, { withCredentials: true })
      .then((response) => {
        console.log(response);
        if (
          response.data.logged_in
          && loggedInStatus === 'NOT_LOGGED_IN'
        ) {
          setStatus('LOGGED_IN');
          setUser(response.data.user);
        } else if (
          !response.data.logged_in
          & (loggedInStatus === 'LOGGED_IN')
        ) {
          setStatus('NOT_LOGGED_IN');
          setUser({});
        }
      })
      .catch((error) => {
        console.log('check login error', error);
      });
  }

  useEffect(() => {
    checkLoginStatus();
  });

  function handleLogin(data) {
    setStatus('LOGGED_IN');
    setUser(data.user);
  }

  function handleLogout() {
    setStatus('NOT_LOGGED_IN');
    setUser({});
  }

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">TEST</Typography>
        <hr />
        {/* <IdeaList /> */}
      </header>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path={'/home'}
            element={<Home handleLogin={handleLogin} handleLogout={handleLogout} loggedInStatus={loggedInStatus} />}
          />
          <Route
            exact
            path={'/dashboard'}
            element={<Dashboard loggedInStatus={loggedInStatus} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
