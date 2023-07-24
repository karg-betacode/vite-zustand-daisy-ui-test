
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css'
import TodoForm from './todo/create-form';
import TodoList from './todo/todo-list';

function App() {

  return (
    <div className="container mx-auto">
      <div className='card w-2/3 shadow-lg mt-8 border border-slate-200'>
        <div className="card-body">
          <TodoForm />
          <TodoList />
        </div>
      </div>
      </div>
  )
}

export default App
