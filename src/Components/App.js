import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from 'axios';
import TaskBoard from './TaskBoard';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tasks: []
    }
  }

  componentDidMount = () => {
    axios.get("https://my-json-server.typicode.com/mnichols17/project2/tasks")
    .then(res => {
        this.setState({
          tasks: res.data
        })
      })
    .catch(error => console.log(error))
  }

  render(){
    return (
      <div className="container-fluid" id="view">
        <Router>
          <div className="mt-3">
            <Switch>
                <Route path="/">
                  <TaskBoard tasks={this.state.tasks} />
                </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
