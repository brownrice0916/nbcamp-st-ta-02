import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import TodoList from "./TodoList";

const Main = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const handleAddTodo = () => {
    dispatch(addTodo(title, body));
    setTitle("");
    setBody("");
  };

  return (
    <main>
      <form onSubmit={onSubmitHandler}>
        <label>제목:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>내용:</label>
        <input
          type="text"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <input onClick={handleAddTodo} type="button" value="제출" />
      </form>
      <h1>todolist</h1>
      <ul>
        {todos
          .filter((todo) => !todo.isDone)
          .map((todo) => (
            <TodoList key={todo.id} todo={todo} isActive={todo.isDone} />
          ))}
      </ul>
      <h1>donelist</h1>
      <ul>
        {todos
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <TodoList key={todo.id} todo={todo} isActive={todo.isDone} />
          ))}
      </ul>
    </main>
  );
};

export default Main;
