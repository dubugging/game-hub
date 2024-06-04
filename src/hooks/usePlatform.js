import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export const usePlatform = () => {
  const [platforms, setPlatforms] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get("/platforms/lists/parents", {
        signal: controller.signal,
      })
      .then((res) => {
        setPlatforms(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { platforms, error };
};
