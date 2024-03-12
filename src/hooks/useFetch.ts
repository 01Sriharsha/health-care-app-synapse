import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [state, setState] = useState({
    loading: false,
    error: false,
    data: null,
  });

  useEffect(() => {
    (async () => {
      try {
        setState((prevState) => ({ ...prevState, loading: true }));
        const response = await axios.get(url);
        setState((prevState) => ({
          ...prevState,
          loading: false,
          data: response.data,
        }));
      } catch (error: any) {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          error: true,
        }));
      } finally {
        setState({ loading: false, error: false, data: null });
      }
    })();
  }, [url]);

  return { ...state };
};
