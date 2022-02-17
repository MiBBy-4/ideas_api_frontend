import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { Typography } from '@mui/material';
import IdeaList from './Idea/IdeaList';
import { sessionRequest } from './apiRequests/CustomerRequests';
import Home from './Home';
import IdeaShow from './Idea/IdeaShow';
import Dashboard from './Dashboard';

function App() {
  const [state, setState] = useState({
    isLoggedIn: false,
    customer: {},
  });

  async function checkLoginStatus() {
    const response = await sessionRequest();
    const { data: { customer, logged_in } } = response;
    if (logged_in && !state.isLoggedIn) {
      setState({
        isLoggedIn: true,
        customer: customer,
      });
    } else if (!logged_in && state.isLoggedIn) {
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

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">TEST</Typography>
        <hr />
        <Routes>
          <Route
            path={'/ideas/*'}
            element={<IdeaList />}
          />
          <Route
            path={'/ideas/:ideaId'}
            element={<IdeaShow />}
          />
          <Route
            path={'/'}
            element={<Home handleLogin={handleLogin} handleLogout={handleLogout} isLoggedIn={state.isLoggedIn} />}
          />
          <Route
            path={'/dashboard'}
            element={<Dashboard isLoggedIn={state.isLoggedIn} />}
          />
        </Routes>
      </header>
    </div>
  );
}
export default App;
