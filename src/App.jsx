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
    customer: {},
  });

  async function checkLoginStatus() {
    const response = await sessionRequest();
    console.log(response);
    if (response.data.logged_in && !state.isLoggedIn) {
      const { data: { customer } } = response;
      setState({
        isLoggedIn: true,
        customer: customer,
      });
    } else if (!response.data.logged_in & state.isLoggedIn) {
      setState({
        isLoggedIn: false,
        customer: {},
      });
    }
  }

  useEffect(() => {
    checkLoginStatus();
  });

  function handleLogin(data) {
    console.log(data);
    setState({
      isLoggedIn: true,
      customer: data.customer,
    });
  }

  function handleLogout() {
    setState({
      isLoggedIn: false,
      customer: {},
    });
  }
  console.log(state.isLoggedIn);

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
