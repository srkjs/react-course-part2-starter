import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CACHE_KEY_TODOS } from '../react-query/constants';

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

// Custom hook query
const useTodos = () => {
  const fetchTodos = () => {
    return axios
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.data);
  };

  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: fetchTodos,
    staleTime: 10 * 1000, // 10seconds
  });
};

export default useTodos;
