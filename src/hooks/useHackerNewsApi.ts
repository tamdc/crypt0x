import axios from "axios";
import { useEffect, useState, useReducer } from "react";

type APIResponse = {
  data: HackerNewsResponse;
};
type APIStatus = "FETCHING" | "SUCCEED" | "FAILURE";

type HackerNewsResponse = {
  hits: HackerNewsItem[];
};

type HackerNewsItem = {
  title: string;
  url: string;
  author: string;
  story_id: number;
};

type Action = {
  type: APIStatus;
  payload?: any;
};
type HackerNewsState = {
  data: HackerNewsResponse;
  isLoading: boolean;
  isError: boolean;
};

const hackerNewsReducer = (state: HackerNewsState, action: Action) => {
  switch (action.type) {
    case "FETCHING":
      return { ...state, isLoading: true, isError: false };
    case "SUCCEED":
      return { data: action.payload, isLoading: false, isError: false };
    case "FAILURE":
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

const useFetchHn = (initUrl: string, initData: HackerNewsResponse) => {
  const [url, setUrl] = useState<string>(initUrl);
  const [state, dispath] = useReducer(hackerNewsReducer, {
    data: initData,
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    let didCancel = false;
    const fetchHn = async () => {
      dispath({ type: "FETCHING" });
      try {
        const response: APIResponse = await axios(url);
        if (!didCancel) dispath({ type: "SUCCEED", payload: response.data });
      } catch (error) {
        if (!didCancel) dispath({ type: "FAILURE" });
      }
    };
    fetchHn();
    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl as any];
};

export default useFetchHn;
