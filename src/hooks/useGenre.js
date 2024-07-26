import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import storedGenres  from "../data/storedGenres";


export const useGenre = () => {
  const {data: genres, error,isLoading} = useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient.get('/genres').then(res => res.data.results),
    staleTime: 24*60*60*1000,
    initialData: storedGenres
  })
  return {genres, error, isLoading}
};