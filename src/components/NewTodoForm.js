import React, { Component } from 'react'
import { v4 as uuidv4 } from "uuid"
import "../Styles/TodoForm.css"

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: "", completed: false, isEditing: false }
        this.handleTodo = this.handleTodo.bind(this);

    }
    handleTodo(e) {
        e.preventDefault();
        let newTodo = { ...this.state, id: uuidv4() }
        this.props.addNewTodo(newTodo);
        this.setState({ task: "" })
    }
    render() {
        return (
            <form
                className='TodoForm'
                onSubmit={e => this.handleTodo(e)}>
                <input
                    className='TodoForm-input'
                    type="text"
                    name='task' id='task'
                    placeholder='New Todo here!'
                    value={this.state.task}
                    onChange={e => this.setState({ task: e.target.value })} />
                <button className='TodoForm-button'>Add Task</button>
            </form>
        )
    }
}

export default NewTodoForm;
