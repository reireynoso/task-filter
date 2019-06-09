import React, { Component } from 'react'

export default class SearchFilter extends Component {
    state = {
        search: ''
    }
    handleOnChange = (e) => {
        // this.setState({[e.target.name]: e.target.value})
        
        this.props.handleSearch(e.target.value)
    }
    render() {
        // console.log(this.state.search)
        return (
            <div className="ui container" id="search">
                <div class="ui icon input">
                    <input
                    onChange = {this.handleOnChange}
                    name="search"
                    type="text"
                    tabindex="0"
                    class="prompt"
                    autocomplete="off"
                    placeholder="Search"
                    /><i aria-hidden="true" class="search icon"></i>
                </div>
            </div>
        )
    }
}
