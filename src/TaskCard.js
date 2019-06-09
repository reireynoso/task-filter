import React, { Component,Fragment } from 'react'
import EditForm from './EditForm'

export default class TaskCard extends Component {

    state = {
        editing: false
    }

    handleEditClick = () => {
        this.setState({
            editing: !this.state.editing
        })
    }
    
    render() {
        const {content, completed, id} = this.props.task
        return (
            
            <div className="ui card">
                {!this.state.editing ?
                <Fragment>
                    <p>{content}</p>
                    {completed ? <button onClick={() => {this.props.changeTask(id)}} className="ui blue button">Mark Incomplete</button> : <button onClick={() => {this.props.changeTask(id)}} className="ui teal button">Mark Complete</button> }
                    <button className="ui green button" onClick={this.handleEditClick}>Edit</button>
                </Fragment>
                :
                <EditForm updateTask={this.props.updateTask} content={content} id={id} handleEditClick={this.handleEditClick}/>
                }
            </div>
         
            
        )
    }
}
