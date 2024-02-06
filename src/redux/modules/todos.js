// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (title, body) => {
  return { type: ADD_TODO, payload: { title, body, isDone: false } };
};

export const deleteTodo = (id) => {
  return { type: DELETE_TODO, payload: id };
};

export const switchTodo = (id) => {
  return { type: SWITCH_TODO, payload: id };
};

const initialState = [
  {
    id: shortid.generate(),
    title: "하이",
    body: "하이입니다",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: shortid.generate(),
          title: action.payload.title,
          body: action.payload.body,
          isDone: action.payload.isDone,
        },
      ];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case SWITCH_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              isDone: !todo.isDone,
            }
          : todo
      );

    default:
      return state;
  }
};

export default todos;
