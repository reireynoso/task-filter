import React, { Component } from 'react'
import data from './data'
import './App.css';
import TasksContainer from './TasksContainer'
import SearchFilter from './SearchFilter'

export default class App extends Component {
  state = {
    tasks: data,
    searchTerm: ''
  }

  handleSearch = (search) => {
    this.setState({
      searchTerm: search
    })
  }

  changeTask = (id) => {
    // console.log(id)
    let newTasks = this.state.tasks.map(task => {
      if(task.id === id){
        task.completed = !task.completed
        return task
      }
      else return task
    })
    this.setState({
      tasks: newTasks
    })

  }
  render() {
    return (
      <div>
        <SearchFilter handleSearch={this.handleSearch}/>
        <TasksContainer searchTerm = {this.state.searchTerm} changeTask={this.changeTask} tasks ={this.state.tasks}/>
      </div>
    )
  }
}

