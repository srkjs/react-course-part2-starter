import useTodos from '../hooks/useTodos';

// Now
// Separation of concerns is adhered.
// Our querying logic (moved to useTodos.tsx) is separated from Component
// and our TodoList component is concerned with single responsibility and is concerned only with markup
const TodoList = () => {
  const { data: todoData, error, isLoading } = useTodos();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error?.message}</p>;

  return (
    <ul className='list-group'>
      {todoData?.map((todo) => (
        <li key={todo.id} className='list-group-item'>
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
