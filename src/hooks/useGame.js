import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export const useGame = (selectedGenre, selectedPlatform, sortValue, deps) => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);

      apiClient
        .get("/games", {
          signal: controller.signal,
          params: {
            genres: selectedGenre,
            platforms: selectedPlatform,
            ordering: sortValue,
          },
        })
        .then((res) => {
          setGames(res.data.results);
          setError("");
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { games, error, isLoading };
};
