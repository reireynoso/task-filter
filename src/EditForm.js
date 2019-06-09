import React, { Component } from 'react'
import { Form,Card,TextArea, Button, Icon } from 'semantic-ui-react'


export default class EditForm extends Component {

    state = {
        content: this.props.content
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitEvent = () => {
        
        this.props.updateTask(this.props.id, this.state.content)
        this.props.handleEditClick()
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.submitEvent}>
                    <Form.Field
                        control={TextArea}
                        placeholder='Start writing here...'
                        value={this.state.content}
                        onChange={this.handleChange}
                        name="content"
                    />
                    <Button.Group>
                        <Button color="green">Submit</Button>
                        <Button onClick={this.props.handleEditClick}>Cancel</Button>
                    </Button.Group>
                </Form>
            </div>
        )
    }
}
