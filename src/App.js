import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from "./pages/homepage/homepage.component"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hello" component={hello} />
      </Switch>

    </div>

  );
}
const hello = () => (
  <h1>Hello</h1>
)

export default App;