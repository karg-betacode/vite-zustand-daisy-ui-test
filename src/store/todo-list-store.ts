import { create } from 'zustand'

type TodoItem = {
  id: string,
  text: string;
  media?: string;
  done: boolean;
};

interface TodoListState {
  todos: TodoItem[],
  add: (text: string) => void,
  remove: (id: string) => void,
  update: (id: string, text: string, done: boolean) => void,
  clear: () => void,
}

const useTodoListStore = create<TodoListState>(set => (
  {
    todos: [
      { id: (new Date().getTime() + 1).toString(), text: "lorem ipsum", done: false },
      { id: (new Date().getTime() + 2).toString(), text: "lorem ipsum 2", done: false }
    ],
    editRowId: null,
    add: (text: string) => { 
      set((state) => {
        const id = new Date().getTime().toString();
        return {
          todos: [
            ...state.todos,
            { 
              text, 
              id, 
              done: false 
            }
          ]
        };
      })
    },
    remove: (id: string) => set((state) => { 
      const newTodos = [...state.todos.filter(x => x.id !== id)];
      return {
        todos: newTodos
      };
    }),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    update: (id: string, text: string) => set((state) => { 
      const todoIndex = state.todos.findIndex(x => x.id == id);
      const oldTodo = state.todos[todoIndex];
      
      state.todos.splice(todoIndex, 1, { ...oldTodo, text });
      
      return {
        todos: [...state.todos]
      };
    }),
    clear: () => {}
  })
);

export default useTodoListStore;
export type { TodoItem };