import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from './context/AuthProvider';
import ProtectedRoute from './ProtectedRoute';

const App: React.FC = () => {
  const user = useContext(AuthContext);

  return (
    <div>
      <Router>
        <Switch>
          <ProtectedRoute exact path="/feed" />

          <Route exact path="/" />

          <Route exact path="/signUp" />

          <Route exact path="/signIn" />

          <Route
            path="/"
            render={() => {
              if (user === undefined) {
                return <p>Loading...</p>;
              }

              if (user) {
                return <Redirect to="/feed" />;
              }

              return <Redirect to="/" />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
