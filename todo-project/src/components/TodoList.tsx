import React from 'react';

interface Props {
   items: {
     id: string,
     text: string,
   }[];
   onDeleteHandler: (id: string) => void
}

const TodoList: React.FC<Props> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteHandler.bind(null, todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList;