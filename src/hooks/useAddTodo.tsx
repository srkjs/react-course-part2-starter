import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Todo } from './useTodos';
import { CACHE_KEY_TODOS } from '../react-query/constants';

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
        .then((res) => res.data),
    onMutate: (newTodo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']) || [];
      queryClient.setQueryData<Todo[]>(['todos'], (todos = []) => [
        newTodo,
        ...todos,
      ]);
      //   if (ref.current) ref.current.value = '';
      onAdd();
      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => {
        return todos?.map((todo) => (todo === newTodo ? savedTodo : todo));
      });
    },
    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodo;
