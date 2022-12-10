import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import "../Styles/TodoList.css"

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:
                JSON.parse(localStorage.getItem("todos")) || [],
        }
        this.addNewTodo = this.addNewTodo.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }
    addNewTodo(newTodo) {
        let todos = this.state.todos;
        todos.push(newTodo);
        this.setState({ todos });
        localStorage.setItem("todos", JSON.stringify(todos));
        // this.setState(st => ({
        //     todos: [...st.todos, newTodo]
        // }))
    }
    handleDelete(id) {
        let todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos });
        localStorage.setItem("todos", JSON.stringify(todos));
        // this.setState(st => ({
        //     todos: st.todos.filter(todo => todo.id !== id)
        // }))
    }
    handleEdit(id, task) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task, completed: false }
            }
            return todo
        })
        this.setState({ todos: updatedTodos });
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }
    handleDone(id) {
        const completedTodo = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        })
        this.setState({ todos: completedTodo })
    }
    render() {
        return (

            <div className='TodoList'><h1>TODO LİST!</h1>
                <div className='TodoList-todos'>
                    {
                        this.state.todos.map(todo => (
                            <Todo
                                id={todo.id}
                                key={todo.id}
                                task={todo.task}
                                completed={todo.completed}
                                handleDelete={this.handleDelete}
                                handleEdit={this.handleEdit}
                                handleDone={this.handleDone} />
                        ))
                    }
                </div>
                <NewTodoForm addNewTodo={this.addNewTodo} />

            </div>


        )
    }
}

export default TodoList



