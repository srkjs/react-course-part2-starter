import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { Todo } from '../hooks/useTodos';
import axios from 'axios';

const TodoForm = () => {
  // useQueryClient() - Used to access QueryClientProvider from main.tsx
  const queryClient = useQueryClient();

  const ref = useRef<HTMLInputElement>(null);
  const addTodo = useMutation({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
        .then((res) => res.data),
    // Call back functions
    onSuccess: (savedTodo, newTodo) => {
      // Two approaches to update the list
      // 1. Invalidating the cache - Tell React Query, cache is invalid and fetch all data from backend
      // queryClient.invalidateQueries({
      //   queryKey: ['todos'],
      // });

      // 2. Update Cache data directly
      queryClient.setQueryData<Todo[]>(['todos'], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);
      console.log(savedTodo);
    }, // called only when success
    //onError: (), // called only when error
    //onSettled: () // called in spite of success/failure
  });
  return (
    <form
      className='row mb-3'
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current && ref.current.value)
          addTodo.mutate({
            id: 0,
            title: ref.current?.value,
            userId: 1,
            completed: false,
          });
      }}
    >
      <div className='col'>
        <input ref={ref} type='text' className='form-control' />
      </div>
      <div className='col'>
        <button className='btn btn-primary'>Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
