import { useReducer } from 'react';
import './App.css';
import tasksReducer from './state-management/reducers/tasksReducer';
import NavBar from './routing/NavBar';
import TasksContext from './state-management/contexts/tasksContext';
import TaskList from './state-management/TaskList';
import authReducer from './state-management/reducers/authReducer';
import AuthContext from './state-management/contexts/authContext';
import LoginPage from './routing/LoginPage';
import LoginStatus from './state-management/LoginStatus';
import HomePage from './state-management/HomePage';
import AuthProvider from './state-management/AuthProvider';
import TaskProvider from './state-management/TaskProvider';

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);

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
