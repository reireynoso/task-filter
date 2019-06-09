import React, { Component } from 'react'

export default class IncompleteTask extends Component {
    render() {
        const {content, completed} = this.props.task
        return (
            
            <div className="ui card">
                <p>{content}</p>
                <button class="ui teal button">Mark Complete</button>             
                <button class="ui blue button">Mark Incomplete</button>
            </div>
        
        )
    }
}
