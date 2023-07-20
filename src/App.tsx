import { useReducer } from 'react';
import './App.css';
import NavBar from './routing/NavBar';
import TasksContext from './state-management/tasks/tasksContext';
import TaskList from './state-management/tasks/TaskList';
import AuthContext from './state-management/auth/authContext';
import LoginPage from './routing/LoginPage';
import LoginStatus from './state-management/auth/LoginStatus';
import HomePage from './state-management/HomePage';
import { AuthProvider } from './state-management/auth/index';
import { TaskProvider } from './state-management/tasks/index';

function App() {
  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <LoginStatus />
          <HomePage />
        </TaskProvider>
      </AuthProvider>
    </>
  );
}

export default App;
