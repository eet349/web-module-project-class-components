import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			todoListArray: [],
		};
	}
	toggleCompleted = (todoId) => {
		const mappedArray = this.state.todoListArray.map((todo) => {
			return todo.id === todoId
				? { ...todo, completed: !todo.completed }
				: todo;
		});

		this.setState({ ...this.state, todoListArray: mappedArray });
	};

	clearCompleted = () => {
		const filteredArray = this.state.todoListArray.filter(
			(todo) => !todo.completed
		);
		this.setState({ ...this.state, todoListArray: filteredArray });
	};

	submitTodo = (todoText) => {
		const newTodo = {
			task: todoText,
			id: Date.now(),
			completed: false,
		};
		this.setState({
			...this.state,
			todoListArray: [...this.state.todoListArray, newTodo],
		});
	};
	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoForm submitTodo={this.submitTodo} />
				<TodoList
					todoList={this.state.todoListArray}
					toggleCompleted={this.toggleCompleted}
					removeTodo={this.removeTodo}
				/>
				<button onClick={this.clearCompleted}>Clear Completed</button>
			</div>
		);
	}
}

export default App;
