
import useTodoListStore from "../store/todo-list-store";
import React from 'react';

// https://stackoverflow.com/questions/76169576/how-to-include-csrf-token-in-single-page-app-in-ruby-on-rails

function TodoForm() {
  const todoList = useTodoListStore();

  const addItem = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('e', e);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('formData', data);

    const text = data.text as string;
    if (text.length > 0) {
      todoList.add(text);
      form.reset();
    } else {
      alert("Text is required.")
    }
    e.preventDefault();
  }

  return (
    <form className="flex w-full gap-x-3 items-center" onSubmit={addItem}>
      <input name="text" type="text" className="input input-bordered flex-grow"></input>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  )
}

export default TodoForm;