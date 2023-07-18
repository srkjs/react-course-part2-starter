import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  page: number;
  pageSize: number;
}

const usePosts = (query: PostQuery) =>
  useQuery<Post[], Error>({
    // Set queryKey like Data fetching hierarchy used in endpoints Eg: /users/001/posts
    // As we go from Left -> Right, data to fetch gets more specific
    queryKey: ['posts', query],
    queryFn: () =>
      axios
        .get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _start: (query.page - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, // 1 minute
    keepPreviousData: true,
  });

export default usePosts;
