import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./store";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default function ReduxTodos() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  const [title, setTitle] = useState("Learn Mongo");
  const [editingId, setEditingId] = useState<string | null>(null);
  return (
    <div id="wd-redux-todos">
      <h3>Redux Todo List</h3>
      <TodoForm title={title} editingId={editingId} setTitle={setTitle} setEditingId={setEditingId}/>
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          // <ChildStateComponent counter={counter} setCounter={setCounter} />
          // add key so that ESLint doesn't cry about it
          <TodoItem key={todo.id} todo={todo} setTitle={setTitle} setEditingId={setEditingId} />
        ))}
      </ul>
    </div>
  );
}