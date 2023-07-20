// React Context is like a bus for transporting boxes, inside which we have states

import { Dispatch } from 'react';
import { Task, TaskAction } from '../reducers/tasksReducer';
import React from 'react';

// Define shape of the box
interface TasksContextType {
  tasks: Task[];
  tasksDispatch: Dispatch<TaskAction>;
}

// The default value we provide below is replaced with value field in <TaskContext.Provider> tag
// const TasksContext = React.createContext<TasksContextType | null>(null);
const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export default TasksContext;
