import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import TaskBoard from './TaskBoard';

export default function App() {
  return (
    <div className="container-fluid" id="view">
      <Router>
        <div className="mt-3">
          <Switch>
              <Route path="/" component={TaskBoard} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}
