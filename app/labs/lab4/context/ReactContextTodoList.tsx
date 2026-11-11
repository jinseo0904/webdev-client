import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [newTitle, setNewTitle] = useState("");

  const handleAdd = () => {
    const title = newTitle.trim();
    if (!title) return;
    addTodo(title);
    setNewTitle("");
  };

  return (
    <div id="wd-react-context-todo-list" className="mt-3 max-w-md">
      <h3>Todo List (Context)</h3>
      <div className="mb-2 flex gap-2">
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New todo"
          id="wd-context-todo-title"
          className="flex-1 rounded border border-neutral-300 px-3 py-1.5"
        />
        <button
          type="button"
          onClick={handleAdd}
          id="wd-context-add-todo-click"
          className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          Add
        </button>
      </div>
      <ul className="m-0 list-none p-0">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-1 flex items-center gap-2">
            <input
              value={todo.title}
              onChange={(e) => updateTodo(todo.id, e.target.value)}
              id={`wd-context-todo-${todo.id}-title`}
              className="flex-1 rounded border border-neutral-300 px-3 py-1.5"
            />
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              id={`wd-context-delete-todo-${todo.id}-click`}
              className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
