import React, { Component } from 'react'
import "../Styles/EditForm.css"

class EditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: this.props.task
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleToogle();
        this.props.handleEdit(this.state.task)
    }
    handleChange(e) {
        this.setState({
            task: e.target.value
        })
    }
    render() {
        return (
            <form
                className='EditForm'
                onSubmit={this.handleSubmit}>
                <input
                    className='EditForm-input'
                    type="text"
                    placeholder='edit'
                    value={this.state.task}
                    onChange={e => this.handleChange(e)} />
                <button
                    className='EditForm-button'
                >Edit</button>
            </form>
        )
    }
}

export default EditForm;
