import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
// QueryClient - core object we use for managing and caching remote data in react query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // Retries 3 times if query doesn't respond back / fails.
      cacheTime: 300_000, //300,000 milliseconds -> 5mins - If no component uses this query for 5mins, then garbage collector removes it.
      // staleTime specifies how long data is considered fresh
      staleTime: 10 * 1000, // 10 seconds
      // React Query automatically refreshes stale data under 3 situations
      //    1. When network is reconnected - refetchOnReconnect
      //    2. When a component is mounted - refetchOnMount
      //    3. When a window is refocused - refetchOnWindowFocus
      refetchOnWindowFocus: false, // Disabling refetch on window focus
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools /> {/* Only for Development */}
    </QueryClientProvider>
  </React.StrictMode>
);
