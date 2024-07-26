import apiClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import storedPlatform from "../data/storedPlatform";

export const usePlatform = () => {
  const {data: platforms, error} = useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get('https://api.rawg.io/api/platforms/lists/parents').then(res => res.data.results),
    staleTime: 24*60*60*1000,
    initialData: storedPlatform
  })

  return { platforms, error };
};
