import { useReducer } from 'react';
import './App.css';
import tasksReducer from './state-management/reducers/tasksReducer';
import NavBar from './routing/NavBar';
import HomePage from './routing/HomePage';
import TasksContext from './state-management/contexts/tasksContext';
import TaskList from './state-management/TaskList';

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <TaskList />
      </TasksContext.Provider>
    </>
  );
}

export default App;
