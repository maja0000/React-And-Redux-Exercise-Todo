import React from "react";
import { connect } from "react-redux";
import store from "../store/index";
import { toggleDone } from "../actions/index";

const mapStateToProps = state => {
  return { tasks: state.tasks };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleDone: todo => dispatch(toggleDone(todo))
  };
};

const ConnectedList = ({ tasks, toggleDone }) => {
  return (
    <ul>
      {tasks.map(task => {
        const style = task.done ? { textDecoration: "line-through" } : null;
        return (
          <li style={style} key={task.id} onClick={() => toggleDone(task.id)}>
            {task.title}
          </li>
        );
      })}
    </ul>
  );
};

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
// connect(tasks:state.tasks)(
// <ul>
//   {tasks.map(task => {
//     return <li>{task.title}</li>;
//   })}
// </ul>)
export default List;
