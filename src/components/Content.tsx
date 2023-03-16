import { useDispatch, useSelector } from "react-redux";
import { selectTodo, add, update, remove } from "../features/todo";
import { useCallback, useRef } from "react";

export const Content = () => {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();
  const todoRef = useRef<HTMLInputElement>(null);

  const addTodo = useCallback(() => {
    if (todoRef.current) {
      dispatch(add(todoRef.current.value));
      todoRef.current.value = "";
    }
  }, [dispatch]);

  const updateStatusTodo = (index: number) => {
    dispatch(update(index));
    return index;
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="my-16 text-4xl">Todo List</div>
      <div className="flex w-5/12">
        <input
          type="text"
          className="w-full rounded-lg border border-slate-300 py-4 px-5 text-black shadow-sm focus:border-gray-900 focus:outline-none focus:ring-2"
          placeholder="Add Todo . . ."
          name="todo"
          ref={todoRef}
        />
        <button
          onClick={addTodo}
          className="border- b ml-2 rounded-lg border-black bg-blue-400 px-10 py-2 text-white shadow-lg transition delay-150 duration-300 hover:bg-blue-500"
        >
          Add
        </button>
      </div>
      {todos.map((data, index) => (
        <div
          key={index}
          className="flex w-5/12 items-center justify-between rounded-lg border-2 border-none bg-neutral-800 px-8 py-6 shadow-lg transition delay-150 duration-300 hover:bg-opacity-70 "
        >
          <div
            className={
              data.status === true ? "text-green-700 line-through" : ""
            }
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                name="status"
                checked={data.status}
                onChange={() => updateStatusTodo(index)}
              />
              <span className="ml-4">{data.text}</span>
            </div>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => dispatch(remove(data.id))}
              className="rounded-lg border-none bg-red-800 px-3 py-2 shadow-lg transition delay-150 duration-300 hover:bg-red-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
