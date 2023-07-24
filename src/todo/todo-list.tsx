import useTodoListStore from "../store/todo-list-store";
import Row from "./row";

function TodoList() {
  const todoList = useTodoListStore();
  return (
    <ul>
      {
        todoList.todos.map(x => <Row key={x.id} todo={x} />)
      }
    </ul>
  )
}

export default TodoList;