import axios from "axios";
import React from "react";

type State = {
  data: any;
  isLoading: boolean;
  isError: boolean;
};

type Action = {
  type: Status;
  payload?: any;
};

type Status = "CMC_FETCHING" | "CMC_SUCCESS" | "CMC_FAIL";

const fetchCMCReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "CMC_FETCHING":
      return { ...state, isLoading: true, isError: false };
    case "CMC_SUCCESS":
      return { data: action.payload, isLoading: false, isError: false };
    case "CMC_FAIL":
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

const useCoinMarketCapApi = (initUrl: string, initData: State) => {
  const [state, dispatch] = React.useReducer(fetchCMCReducer, initData);
  const [url, setUrl] = React.useState(initUrl);

  React.useEffect(() => {
    let didCancel = false;
    const fetchCMCApi = async () => {
      dispatch({ type: "CMC_FETCHING" });
      try {
        const response = await axios("/api");

        if (!didCancel)
          dispatch({ type: "CMC_SUCCESS", payload: response.data });
      } catch (error) {
        if (!didCancel) dispatch({ type: "CMC_FAIL" });
      }
    };

    fetchCMCApi();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl];
};

export default useCoinMarketCapApi;
