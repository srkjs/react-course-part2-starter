import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Todo {
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
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 10 * 1000, // 10seconds
  });
};

export default useTodos;
