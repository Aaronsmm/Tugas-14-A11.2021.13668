import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Home from './components/Home';
import About from './components/About';
import { UserProvider } from './contexts/UserContext';

const store = createStore(rootReducer);

function App() {
  const [user, setUser] = useState({ name: 'Aaron s', nim: 'A11.2021.13668' });

  return (
    <Provider store={store}>
      <UserProvider>
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/">Aplikasi A11.2021.13668</Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="mt-4">
              <Routes>
                <Route path="/" element={<Home user={user} />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </div>
        </Router>
      </UserProvider>
    </Provider>
  );
}

export default App;
