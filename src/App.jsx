import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
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
import { loggedInStatus } from './LoggedInConsts';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [state, setState] = useState({
    customer: {},
  });
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((status) => status.isLoggedIn);
  const navigate = useNavigate();

  async function checkLoginStatus() {
    const response = await sessionRequest();
    const { data: { customer, logged_in } } = response;
    if (logged_in && !isLoggedIn) {
      dispatch({ type: loggedInStatus('loggedIn') });
      setState({
        customer: customer,
      });
    } else if (!logged_in && isLoggedIn) {
      dispatch({ type: loggedInStatus('notLoggedIn') });
      setState({
        customer: {},
      });
    }
  }

  useEffect(() => {
    checkLoginStatus();
  });
  function handleLogin(data) {
    dispatch({ type: loggedInStatus('loggedIn') });
    setState({
      customer: data.customer,
    });
  }

  function handleLogout() {
    dispatch({ type: loggedInStatus('notLoggedIn') });
    setState({
      customer: {},
    });
    navigate('/');
  }

  return (
    <div className="App">
      <header className="App-header">
        <IdeaNavbar handleLogout={handleLogout} customer={state.customer} />
        { isLoggedIn ? (
          <Routes>
            <Route
              path={'/ideas/:ideaId/update'}
              element={<IdeaUpdate />}
            />
            <Route
              path={'/ideas'}
              element={<IdeaList />}
            />
            <Route
              path={'/ideas/:ideaId'}
              element={<IdeaShow customer={state.customer} />}
            />
            <Route
              path={'/ideas/new'}
              element={<IdeaNew customer={state.customer} />}
            />
            <Route
              path={'/'}
              element={<Home handleLogin={handleLogin} handleLogout={handleLogout} />}
            />
            <Route
              path={'/registration'}
              element={<Navigate to="/" />}
            />
            <Route
              path={'/login'}
              element={<Navigate to="/" />}
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
              element={<Home handleLogin={handleLogin} handleLogout={handleLogout} />}
            />
            <Route
              path={'/registration'}
              element={<RegistrationPage handleLogin={handleLogin} />}
            />
            <Route
              path={'/login'}
              element={<LoginPage handleLogin={handleLogin} />}
            />
          </Routes>
        ) }
      </header>
    </div>
  );
}
export default App;
