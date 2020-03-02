import * as React from "react";

export interface IToDo {
  id: string;
  item: string;
  completed: boolean;
}

interface IToDoList {
  list: IToDo[];
}
/**
 * ToDoList take list property
 * list property is an Array
 * list property Array is made of Objects which have 'item' and 'completed' property
 * @params list
 * @interface IToDoList array of ```IToDo```
 * @interface IToDo object of ```item``` and ```completed``` properties
 */
export class ToDoList extends React.Component<IToDoList, {}> {
  render() {
    const { list } = this.props;
    const todoList = list.map(item => {
      return (
        <li>
          <label>
            <input
              type="checkbox"
              checked={item.completed}
              style={{ margin: 5 }}
              id={item.id}
            />
            {item.item}
          </label>
        </li>
      );
    });
    return <ul style={{ listStyle: "none" }}>{todoList}</ul>;
  }
}
