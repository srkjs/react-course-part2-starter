import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { Todo } from '../hooks/useTodos';
import axios from 'axios';

interface AddTodoContext {
  previousTodos: Todo[];
}

const TodoForm = () => {
  // useQueryClient() - Used to access QueryClientProvider from main.tsx
  const queryClient = useQueryClient();

  const ref = useRef<HTMLInputElement>(null);
  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>('https://xjsonplaceholder.typicode.com/todos', todo)
        .then((res) => res.data),
    // onMutate is called before mutation is executed
    // i.e. Todo list gets updated before the data is sent to backend to improve user experience
    // And once backend call is successful, data is refreshed
    onMutate: (newTodo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']) || [];
      queryClient.setQueryData<Todo[]>(['todos'], (todos) => [
        newTodo,
        ...(todos || []),
      ]);
      if (ref.current) ref.current.value = '';
      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      // Update the todo list once backend call is finished
      queryClient.setQueryData<Todo[]>(['todos'], (todos) => {
        return todos?.map((todo) => (todo === newTodo ? savedTodo : todo));
      });
    },
    // Param: context -> Previous state of data before updation
    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(['todos'], context.previousTodos);
    },
  });
  return (
    <>
      {addTodo.error && (
        <div className='alert alert-danger'>{addTodo.error.message}</div>
      )}
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
          <button className='btn btn-primary' disabled={addTodo.isLoading}>
            {addTodo.isLoading ? 'Adding...' : 'Add'}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
