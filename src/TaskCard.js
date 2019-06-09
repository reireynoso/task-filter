import React, { Component } from 'react'

export default class TaskCard extends Component {
    
    render() {
        const {content, completed, id} = this.props.task
        return (
            <div className="ui card">
                <p>{content}</p>
                {completed ? <button onClick={() => {this.props.changeTask(id)}} class="ui blue button">Mark Incomplete</button> : <button onClick={() => {this.props.changeTask(id)}} class="ui teal button">Mark Complete</button> }
            </div>
        )
    }
}
