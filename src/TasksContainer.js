import React, { Component } from 'react'
import TaskCard from './TaskCard'
// import IncompleteTask from './IncompleteTask'
// import { Card, Button, Icon } from 'semantic-ui-react'


export default class TasksContainer extends Component {
    
    format = (tasks) => {
        return this.filtration(tasks)
    }

    filtration = (tasks) => {
        return tasks.filter(task =>
            task.content.toLowerCase()
            .includes(this.props.searchTerm.toLowerCase())
          )
    }

    completeTasks = (tasks) => {
        return this.format(tasks.filter(task =>
            task.completed
          ))
    } 

    inCompleteTasks = (tasks) => {
        return this.format(tasks.filter(task =>
            task.completed === false
          )) 
    } 
    render() {
        // console.log(this.props.searchTerm)
        return (
            <div className="ui container" id="taskContainer">
                <div>
                <h1>Completed</h1>
                    {
                        this.completeTasks(this.props.tasks).map(task => {
                            return <TaskCard handleDelete={this.props.handleDelete} updateTask={this.props.updateTask} changeTask={this.props.changeTask} task={task}/>
                        })
                    }
                </div>

                <div>
                <h1>Incomplete</h1>
                    {
                        this.inCompleteTasks(this.props.tasks).map(task => {
                            return <TaskCard handleDelete={this.props.handleDelete} updateTask={this.props.updateTask} changeTask={this.props.changeTask} task={task}/>
                        })
                    }
                </div>

            </div>
        )
    }
}
