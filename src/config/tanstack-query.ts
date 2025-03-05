import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (err) => {
      console.log(err)
    },
  }),
  mutationCache: new MutationCache({
    onError: (err) => {
      console.log(err)
    },
  }),
})
