import React from 'react';
import axios from 'axios';

class TaskBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    componentDidMount = async() => {
        await axios.get("https://my-json-server.typicode.com/mnichols17/project2/tasks")
            .then(res => {
                this.setState({
                    tasks: res.data
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="container-fluid" id="taskBoard">
                <div className="row">
                    <div class="col" id="col0">
                    {this.state.tasks.forEach(task => {
                        console.log(task.status === 0 ? task : null)
                    })}
                    </div>
                    <div class="col" id="col1">

                    </div>
                </div>
            </div>
        )
    }
}

export default TaskBoard;