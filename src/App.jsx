import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import IdeaList from './Idea/IdeaList';
import { sessionRequest } from './apiRequests/CustomerRequests';
import Home from './Home';
import IdeaShow from './Idea/IdeaShow';
import IdeaNew from './Idea/IdeaNew';
import LoginPage from './auth/LoginPage';
import RegistrationPage from './auth/RegistrationPage';
import ErrorPage from './auth/ErrorPage';
import IdeaUpdate from './Idea/IdeaUpdate';
import IdeaNavbar from './templates/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { roles } from './Roles';

function App() {
  const [state, setState] = useState({
    isLoggedIn: false,
    customer: {},
  });
  const navigate = useNavigate();

  const { customer: { role } } = state;

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
    navigate('/');
  }

  return (
    <div className="App">
      <header className="App-header">
        <IdeaNavbar isLoggedIn={state.isLoggedIn} handleLogout={handleLogout} customer={state.customer} />
        { state.isLoggedIn && role === roles('admin') ? (
          <Routes>
            <Route
              path={'/ideas/:ideaId/update'}
              element={<IdeaUpdate />}
            />
          </Routes>
        ) : (
          <Routes>
            <Route
              path={'/ideas/:ideaId/update'}
              element={<ErrorPage />}
            />
          </Routes>
        )}
        { state.isLoggedIn ? (
          <Routes>
            <Route
              path={'/ideas'}
              element={<IdeaList isLoggedIn={state.isLoggedIn} />}
            />
            <Route
              path={'/ideas/:ideaId'}
              element={<IdeaShow customer={state.customer} isLoggedIn={state.isLoggedIn} />}
            />
            <Route
              path={'/ideas/new'}
              element={<IdeaNew customer={state.customer} isLoggedIn={state.isLoggedIn} />}
            />
            <Route
              path={'/'}
              element={<Home handleLogin={handleLogin} handleLogout={handleLogout} isLoggedIn={state.isLoggedIn} />}
            />
            <Route
              path={'/registration'}
              element={<ErrorPage />}
            />
            <Route
              path={'/login'}
              element={<ErrorPage />}
            />
          </Routes>
        ) : (
          <Routes>
            <Route
              path={'/ideas'}
              element={<ErrorPage />}
            />
            <Route
              path={'/ideas/:ideaId'}
              element={<ErrorPage />}
            />
            <Route
              path={'/ideas/new'}
              element={<ErrorPage />}
            />
            <Route
              path={'/'}
              element={<Home handleLogin={handleLogin} handleLogout={handleLogout} isLoggedIn={state.isLoggedIn} />}
            />
            <Route
              path={'/registration'}
              element={<RegistrationPage handleLogin={handleLogin} isLoggedIn={state.isLoggedIn} />}
            />
            <Route
              path={'/login'}
              element={<LoginPage handleLogin={handleLogin} isLoggedIn={state.isLoggedIn} />}
            />
          </Routes>
        ) }
      </header>
    </div>
  );
}
export default App;
