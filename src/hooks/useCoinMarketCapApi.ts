import axios from "axios";
import React, { Dispatch, SetStateAction } from "react";
import { ApiResponse, ExchangeInfo } from "../types";

type State = {
  data: any;
  isLoading: boolean;
  isError: boolean;
};

type Action = {
  type: Status;
  payload?: any;
};

type Status = "CG_FETCHING" | "CG_SUCCESS" | "CG_FAIL";

const fetchCMCReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "CG_FETCHING":
      return { ...state, isLoading: true, isError: false };
    case "CG_SUCCESS":
      return { data: action.payload, isLoading: false, isError: false };
    case "CG_FAIL":
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

const useCoinMarketCapApi = (
  initUrl: string,
  initData: State
): [State, Dispatch<SetStateAction<string>>] => {
  const [state, dispatch] = React.useReducer(fetchCMCReducer, initData);
  const [url, setUrl] = React.useState(initUrl);

  React.useEffect(() => {
    let didCancel = false;
    const fetchCMCApi = async () => {
      dispatch({ type: "CG_FETCHING" });
      try {
        const response: ApiResponse<{ data: ExchangeInfo[] }> = await axios(
          "/api/exchanges"
        );

        if (!didCancel)
          dispatch({ type: "CG_SUCCESS", payload: response?.data?.data });
      } catch (error) {
        if (!didCancel) dispatch({ type: "CG_FAIL" });
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
