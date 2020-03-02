import * as React from "react";

export interface IToDo {
  id: string;
  item: string;
  completed: boolean;
}

interface IToDoList {
  list: IToDo[];
}
interface IState {
  todoList: any[];
}
/**
 * ToDoList take list property
 * list property is an Array
 * list property Array is made of Objects which have 'item' and 'completed' property
 * @params list
 * @interface IToDoList array of ```IToDo```
 * @interface IToDo object of ```item``` and ```completed``` properties
 */
export class ToDoList extends React.Component<IToDoList, IState> {
  constructor(props: IToDoList) {
    super(props);
    this.state = {
      todoList: this.props.list
    };
  }
  onChangeChecked = (checked: boolean, index: number) => {
    this.setState(previous => {
      previous.todoList[index].completed = checked;
      return {
        todoList: previous.todoList
      };
    });
  };

  render() {
    const todoList = this.state.todoList.map((item, index) => {
      return (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.completed}
              style={{ margin: 5 }}
              id={item.id}
              onChange={event =>
                this.onChangeChecked(event.target.checked, index)
              }
            />
            {item.item}
          </label>
        </li>
      );
    });
    return <ul style={{ listStyle: "none" }}>{todoList}</ul>;
  }
}
