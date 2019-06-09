import React, { Component } from 'react'
import { Form,TextArea, Button} from 'semantic-ui-react'

export default class AddTask extends Component {
    state = {
        content: '',
        completed: false,
        id: this.props.currentId + 1
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.handleAddTask(this.state)
    }

    render() {
        console.log(this.state.id)
        return (
            <div className="ui container">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field
                        control={TextArea}
                        placeholder='Content Here..'
                        value={this.state.content}
                        onChange={this.handleChange}
                        name="content"
                    />
                    <Button.Group>
                        <Button color="green">Submit</Button>
                        <Button onClick={this.props.handleAddClick}>Cancel</Button>
                    </Button.Group>
                </Form>
            </div>
        )
    }
}
