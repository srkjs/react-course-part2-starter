import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const TodoList = () => {
  const fetchTodos = () => {
    return axios
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todosx')
      .then((response) => response.data);
  };

  // Benefits with ReactQuery
  // 1. Automatic retries (Default: 2 times)
  // 2. Automatic refetch (Auto refresh after sometime)
  // 3. Caching - Store data into cache and refresh after certain period of time

  // Axios module returns errors of type 'Error' - which is commonly used across browsers
  const { data: todoData, error } = useQuery<Todo[], Error>({
    // Unique Identifier for the query, used internally for caching. Data stored in cache will be accessible via this key
    queryKey: ['todos'],
    // queryFn: Function that we use to fetch data from backend
    // queryFn: () => {
    //   axios
    //     .get('https://jsonplaceholder.typicode.com/todos') // Returns a response Object, but we only need to store the response data to cache
    //     .then((response) => response.data);
    // },
    queryFn: fetchTodos,
  });

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
