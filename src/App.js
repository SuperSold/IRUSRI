import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import TodoList from './components/TodoList';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="container">
      {!isLoggedIn ? (
        isRegistering ? (
          <RegisterForm setIsRegistering={setIsRegistering} onLogin={handleLogin} />
        ) : (
          <LoginForm setIsRegistering={setIsRegistering} onLogin={handleLogin} />
        )
      ) : (
        <TodoList onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;
