import { useReducer } from 'react';
import './App.css';
import NavBar from './routing/NavBar';
import TasksContext from './state-management/tasks/tasksContext';
import TaskList from './state-management/tasks/TaskList';
import LoginPage from './routing/LoginPage';
import LoginStatus from './state-management/auth/LoginStatus';
import HomePage from './state-management/HomePage';
import { TaskProvider } from './state-management/tasks/index';
import Counter from './state-management/counter/Counter';

function App() {
  return (
    <>
      <TaskProvider>
        <Counter />
        <NavBar />
        <LoginStatus />
        <HomePage />
      </TaskProvider>
    </>
  );
}

export default App;
