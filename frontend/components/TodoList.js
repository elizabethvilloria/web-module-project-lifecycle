import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div id="todos">
          <h2>Todos: </h2>
          {
            this.state.todos.reduce((acc, td) => {
              if(this.state.displayCompleteds || !td.completed) return acc.concat(
                <Todo
                  key={td.id}
                  toggleCompleted={this.props.toggleCompleted}
                  todo={td}
                />
              )
              return acc
            }, [])
              // return <div onClick={this.toggleCompleted(td.id)} key={td.id}>{td.name}{td.completed ? '' : '✔️'}</div>
       
          }
        </div>
    )
  }
}
