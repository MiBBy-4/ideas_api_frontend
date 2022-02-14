import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Typography } from '@mui/material';
import axios from 'axios';
import IdeaList from './Idea/IdeaList';
import Registration from './auth/Registration';
import { sessionRequest } from './apiRequests/CustomerRequests';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  const [state, setState] = useState({
    isLoggedIn: false,
    user: {},
  });

  function checkLoginStatus() {
    sessionRequest(state, setState);
  }

  useEffect(() => {
    checkLoginStatus();
  });

  function handleLogin(data) {
    setState({
      isLoggedIn: true,
      user: data.user,
    });
  }

  function handleLogout() {
    setState({
      isLoggedIn: false,
      user: {},
    });
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
            element={<Home handleLogin={handleLogin} handleLogout={handleLogout} isLoggedIn={state.isLoggedIn} />}
          />
          <Route
            exact
            path={'/dashboard'}
            element={<Dashboard isLoggedIn={state.isLoggedIn} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
