import React, { Component } from 'react'
import TaskCard from './TaskCard'
import IncompleteTask from './IncompleteTask'

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
    render() {
        console.log(this.props.searchTerm)
        return (
            <div className="ui container" id="taskContainer">
                {
                    this.format(this.props.tasks).map(task => {

                        return <TaskCard changeTask={this.props.changeTask} task={task}/>
                        // if (task.completed){
                        //     return <TaskCard task={task}/>
                        // }
                        // else{
                        //     return <IncompleteTask task={task}/>
                        // }
                    })
                }
            </div>
        )
    }
}
