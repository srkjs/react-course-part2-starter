import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = (userId: number | undefined) =>
  useQuery<Post[], Error>({
    // Set queryKey like Data fetching hierarchy used in endpoints Eg: /users/001/posts
    // As we go from Left -> Right, data to fetch gets more specific
    queryKey: userId ? ['users', userId, 'posts'] : ['posts'],
    queryFn: () =>
      axios
        .get('https://jsonplaceholder.typicode.com/posts', {
          params: { userId },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, // 1 minute
  });

export default usePosts;
