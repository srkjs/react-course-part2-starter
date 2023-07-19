import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CACHE_KEY_TODOS } from '../react-query/constants';
import APIClient from '../react-query/services/apiClient';

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const apiClient = new APIClient<Todo[]>('/todos');

// Custom hook query
const useTodos = () => {
  const fetchTodos = () => {
    return axios
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.data);
  };

  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: apiClient.getAll, // Reference to this(apiClient Object is lost)
    // 1. bind the current apiClient Object while referencing the method
    // queryFn: apiClient.getAll.bind(apiClient)
    // 2. Use arrow functions in APIClient.tsx
    // Arrow functions, by default has reference to this (current) Object
    staleTime: 10 * 1000, // 10seconds
  });
};

export default useTodos;
