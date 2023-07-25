import { Dispatch, SetStateAction, useState } from "react";
import IconEdit from "../icons/icon-edit";
import IconX from "../icons/icon-x";
import useTodoListStore, { TodoItem } from "../store/todo-list-store";


function EditForm({ todo, setIsEditting }: { todo: TodoItem, setIsEditting: Dispatch<SetStateAction<boolean>> }) {
  const todoList = useTodoListStore();
  const [text, setText] = useState(todo.text);

  const updateItem = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('formData', data);

    todoList.update(id, data.text as string, false);

    e.preventDefault();
    form.reset();
    setIsEditting(false);
  }

  return (
    <form className="flex w-full gap-x-3 items-center" onSubmit={(e) => updateItem(e, todo.id)}>
      <input name="text" type="text" className="input input-bordered flex-grow" value={text} onChange={(e) => setText(e.target.value)}></input>
      <button type="submit" className="btn">Update</button>
    </form>
  )
}


function ViewOnly({ todo, setIsEditting }: { todo: TodoItem, setIsEditting: Dispatch<SetStateAction<boolean>> }) {
  const todoList = useTodoListStore();

  function onRemove() {
    if (confirm("Confirm remove?")) {
      todoList.remove(todo.id);
    }
  }

  return (
    <>
      <div>
        {todo.text}
        {/* <p className="text-xs">{todo.id}</p> */}
      </div>
      <div className='flex gap-x-3'>
        <span className='btn bg-green-500 text-white'>Done!</span>
        <span className='btn' onClick={() => setIsEditting(true)}>
          <IconEdit className="text-blue-500 text-lg" />
        </span>
        <span className='btn'>
          <IconX className="text-blue-500 text-3xl" onClick={()=> onRemove()}/>
        </span>
      </div>
  </>);
}


function Row({ todo }: { todo: TodoItem }) {

  const [isEditting, setIsEditting] = useState(false)

  return (
    <li key={todo.id} className='flex items-center gap-x-3 p-2 hover:bg-slate-50 justify-between'>
      { isEditting ? 
        <EditForm todo={todo} setIsEditting={setIsEditting} /> : 
        <ViewOnly todo={todo} setIsEditting={setIsEditting} /> 
      }
    </li>
  );
}

export default Row;