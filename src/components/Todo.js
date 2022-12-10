import React, { Component } from 'react';
import EditForm from './EditForm';
import "../Styles/Todo.css"

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToogle = this.handleToogle.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }
    handleDelete(e, id) {
        e.stopPropagation();
        this.props.handleDelete(id);
    }
    handleToogle(id) {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    handleEdit(task) {
        this.props.handleEdit(this.props.id, task)
    }
    handleDone(id) {
        this.props.handleDone(id)
    }
    render() {
        let { task, id, completed } = this.props
        return (
            <>
                {this.state.isEditing ? <EditForm
                    handleToogle={this.handleToogle}
                    handleEdit={this.handleEdit}
                    task={task}
                />
                    :
                    <div
                        className={!completed ? "Todo" : "Todo Todo-done"}
                        onClick={() => this.handleDone(id)}
                    >   <span

                        className='Todo-task'>{task}
                        </span>
                        <button
                            className='Todo-editButton'
                            onClick={() => this.handleToogle(id)}
                        >Edit</button>

                        <button
                            className='Todo-deleteButton'
                            onClick={(e) => this.handleDelete(e, id)}
                        >Delete</button>
                    </div>
                }
            </>


        )
    }
}


export default Todo;