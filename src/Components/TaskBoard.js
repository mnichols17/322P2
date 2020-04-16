import React from 'react';
import axios from 'axios';


class TaskBoard extends React.Component {

    moveCardText = (status, id) => {
        switch(status){
            case(0):
                return <div>
                    <a href="#" onClick={this.addStatus} id={id}>Start Work &gt;&gt;</a>
                </div>
                break;
            case(1):
                return <div>
                    <a href="#" onClick={this.subStatus} id={id}>&lt;&lt; Send Back</a>
                    <br />
                    <a href="#" onClick={this.addStatus} id={id}>Request Review &gt;&gt;</a>
                </div>
                break;
            case(2):
                return <div>
                    <a href="#" onClick={this.subStatus} id={id}>&lt;&lt; More Work Required</a>
                    <br />
                    <a href="#" onClick={this.addStatus} id={id}>Mark Done &gt;&gt;</a>
                </div>
                break;
            case(3):
                return <div>
                    <a href="#" onClick={this.subStatus} id={id}>&lt;&lt; Request Re-Review</a>
                </div>
                break;
        }
    }

    renderCard = (task, status) => {
        return task.status === status ? 
        <div className="card my-2" key={task.id}>
            <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">ID: {task.id}</h6>
                {this.moveCardText(task.status, task.id)}
            </div>
        </div> : null
    }

    addStatus = (event) => {
        let newList = this.props.tasks;
        let index = this.props.tasks.findIndex(task => task.id === parseInt(event.target.id))
        newList[index].status = this.props.tasks[index].status !== 3 ? this.props.tasks[index].status + 1 : this.props.tasks[index].status
        this.props.updateTaskList(newList)
    }

    subStatus = (event) => {
        let newList = this.props.tasks;
        let index = this.props.tasks.findIndex(task => task.id === parseInt(event.target.id))
        newList[index].status = this.props.tasks[index].status !== 0 ? this.props.tasks[index].status - 1 : this.props.tasks[index].status
        this.props.updateTaskList(newList)
    }

    render() {
        return (
            <div className="container-fluid" id="taskBoard">
                <div className="row">
                    <div className="col" id="col0">
                        <h2 className="mt-1">To Do</h2>
                        {this.props.tasks.map(task => this.renderCard(task, 0))}
                    </div>
                    <div className="col" id="col1">
                        <h2 className="mt-1">In Progress</h2>
                        {this.props.tasks.map(task => this.renderCard(task, 1))}
                    </div>
                    <div className="col" id="col2">
                        <h2 className="mt-1">Review</h2>
                        {this.props.tasks.map(task => this.renderCard(task, 2))}
                    </div>
                    <div className="col" id="col3">
                        <h2 className="mt-1">Done</h2>
                        {this.props.tasks.map(task => this.renderCard(task, 3))}
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskBoard;