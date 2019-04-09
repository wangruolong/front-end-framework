import {connect} from 'react-redux'

import {addTodo, toggleTodo} from 'actions/todoAction'
import TodoListDump from 'components/todoList'


const mapStateToProps = state => {
	return {
		todos: state.todos
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id))
		},
		onAddTodo: (id, text, completed) =>{
			dispatch(addTodo(id, text, completed))
		}
	}
}

const TodoListSmart = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoListDump)

export default TodoListSmart