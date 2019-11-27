import React, { Component } from 'react'
import data from './data'
import './App.css';
import TasksContainer from './TasksContainer'
import SearchFilter from './SearchFilter'
import AddTask from './AddTask';

export default class App extends Component {
  state = {
    tasks: data,
    idTracker: data.length,
    searchTerm: '',
    addItem: false
  }

  handleSearch = (search) => {
    this.setState({
      searchTerm: search
    })
  }

  updateTask = (id, content) => {
    // console.log(id)
    // console.log(content)
    let updatedStuff = this.state.tasks.map(task => {
      if(task.id === id){
        task.content = content
        return task
      }
      else{
        return task
      }
    })
    this.setState({
      tasks: updatedStuff
    })
  }

  changeTask = (id) => {
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
  handleAddClick = () => {
    this.setState({
      addItem: !this.state.addItem
    })
  }

  handleAddTask = (newTask) => {
    // console.log(newTask)
    this.setState({
      tasks: [newTask, ...this.state.tasks],
      idTracker: this.state.idTracker + 1,
    })

    // console.log(this.state.idTracker)
  }

  handleDelete = (id) => {
    console.log(id)
    let removed = this.state.tasks.filter(task => task.id !== id)
    this.setState({
      tasks: removed
    })
  }
  
  render() {
    return (
      <div>
        <SearchFilter handleSearch={this.handleSearch}/>
        <button className="ui button"onClick={this.handleAddClick}>Add Task</button>
        {
          this.state.addItem ? <AddTask handleAddTask={this.handleAddTask} handleAddClick={this.handleAddClick} currentId={this.state.idTracker}/> : <p></p>
        }
        <TasksContainer handleDelete={this.handleDelete} updateTask={this.updateTask} searchTerm = {this.state.searchTerm} changeTask={this.changeTask} tasks ={this.state.tasks}/>
      </div>
    )
  }
}

