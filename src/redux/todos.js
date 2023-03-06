import { createReduxModule } from "hooks-for-redux";

const initialStateTodos = {
  todoList: [],
};

export const [useTodo, { addTodo, removeTodo }] = createReduxModule(
  "todos",
  initialStateTodos,
  {
    addTodo: (state, todo) => {
      return {
        ...state,
        todoList: [...state.todoList, todo],
      };
    },
    removeTodo: (state, id) => {
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== id),
      };
    },
  }
);
