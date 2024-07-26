import apiClient from "../services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGame = (
  selectedGenre,
  selectedPlatform,
  sortValue,
  searchText,
  deps
) => {
  const {data: games, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage} = useInfiniteQuery({
    queryKey: ['games', deps],
    queryFn: ({pageParam = 1}) => apiClient.get('/games', {
      params: {
        genres: selectedGenre,
            platforms: selectedPlatform,
            ordering: sortValue,
            search: searchText,
            page: pageParam
      }
    }).then(res => res.data),
    getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1 : undefined
  })
  return { games, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage };
};
