import apiClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

export const useGame = (
  selectedGenre,
  selectedPlatform,
  sortValue,
  searchText,
  deps
) => {
  const {data: games, error, isLoading} = useQuery({
    queryKey: ['games', deps],
    queryFn: () => apiClient.get('/games', {
      params: {
        genres: selectedGenre,
            platforms: selectedPlatform,
            ordering: sortValue,
            search: searchText,
      }
    }).then(res => res.data.results)
  })
  return { games, error, isLoading };
};
