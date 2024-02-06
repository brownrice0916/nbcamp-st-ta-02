import React from "react";
import { Link } from "react-router-dom";
import { deleteTodo, switchTodo } from "../redux/modules/todos";
import { useDispatch } from "react-redux";

const TodoList = ({ todo, isActive }) => {
  const dispatch = useDispatch();

  const onSuccessHandler = (id) => {
    dispatch(switchTodo(id));
  };

  const onDeleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <li style={{ border: "1px solid black" }} key={todo.id}>
      <p>{todo.title}</p>
      <p>{todo.body}</p>
      <span>
        <button
          onClick={() => {
            onSuccessHandler(todo.id);
          }}
        >
          {isActive ? "취소" : "완료"}
        </button>
        <button
          onClick={() => {
            onDeleteHandler(todo.id);
          }}
        >
          삭제
        </button>
        <Link to={`/${todo.id}`}>상세보기</Link>
      </span>
    </li>
  );
};

export default TodoList;
