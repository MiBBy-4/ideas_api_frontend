import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Typography } from '@mui/material';
import IdeaList from './Idea/IdeaList';
import Registration from './auth/Registration';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  const [loggedInStatus, setStatus] = useState('NOT_LOGGED_IN');
  const [user, setUser] = useState({});

  function handleLogin(data) {
    setStatus('LOGGED_IN');
    setUser(data.user);
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
            element={<Home handleLogin={handleLogin} loggedInStatus={loggedInStatus} />}
          />
          <Route
            exact
            path={'/dashboard'}
            element={<Dashboard loggedInStatus={loggedInStatus} />}
          />
        </Routes>
      </BrowserRouter>
      <Registration />
    </div>
  );
}
export default App;
