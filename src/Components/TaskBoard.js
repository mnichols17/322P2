import React from 'react';


class TaskBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    renderCard = (task, status) => {
        return task.status === status ? 
        <div className="card my-2" key={task.id}>
            <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">ID: {task.id}</h6>
            </div>
        </div> : null
    }

    render() {
        return (
            <div className="container-fluid" id="taskBoard">
                <div className="row">
                    <div className="col" id="col0">
                        <h2>To Do</h2>
                        {this.props.tasks.map(task => this.renderCard(task, 0))}
                    </div>
                    <div className="col" id="col1">
                        <h2>In Progress</h2>
                        {this.props.tasks.map(task => this.renderCard(task, 1))}
                    </div>
                    <div className="col" id="col2">
                        <h2>Review</h2>
                        {this.props.tasks.map(task => this.renderCard(task, 2))}
                    </div>
                    <div className="col" id="col3">
                        <h2>Done</h2>
                        {this.props.tasks.map(task => this.renderCard(task, 3))}
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskBoard;