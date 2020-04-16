import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from 'axios';

import TaskBoard from './TaskBoard';
import AddTask from './AddTask';

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
        console.log(res.data)
        this.setState({
          tasks: res.data
        })
      })
    .catch(error => console.log(error))
  }

  updateTaskList = (newTasks) => {
      this.setState({
          tasks: newTasks
      })
  }

  render(){
    return (
      <div className="container-fluid" id="view">
        <Router>
          <div className="mt-3">
            <Switch>
                <Route exact path="/">
                  <TaskBoard tasks={this.state.tasks} updateTaskList={this.updateTaskList}/>
                </Route>
                <Route path="/addtask">
                  <AddTask tasks={this.state.tasks} updateTaskList={this.updateTaskList}/>
                </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App