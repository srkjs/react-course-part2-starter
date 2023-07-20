import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_TODOS } from '../react-query/constants';
import todoService, { Todo } from '../react-query/services/todoService';

// Custom hook query
const useTodos = () => {
  return useQuery<Todo, Error, Todo[]>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: todoService.getAll, // Reference to this(apiClient Object is lost)
    // 1. bind the current apiClient Object while referencing the method
    // queryFn: apiClient.getAll.bind(apiClient)
    // 2. Use arrow functions in APIClient.tsx
    // Arrow functions, by default has reference to this (current) Object
    staleTime: 10 * 1000, // 10seconds
  });
};

export default useTodos;
