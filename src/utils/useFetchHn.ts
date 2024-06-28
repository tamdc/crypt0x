import axios from "axios";
import React, { useEffect, useState } from "react";

interface HNResultItem {
  title: string;
  url: string;
  author: string;
  story_id: number;
}
interface HNSearchRes {
  data: {
    hits: HNResultItem[];
  };
}

const useFetchHn = (defaultUrl: string) => {
  const [url, setUrl] = useState<string>(defaultUrl);
  const [data, setData] = useState<HNResultItem[]>([]);

  useEffect(() => {
    const fetchHn = async () => {
      const response: HNSearchRes = await axios(url);
      const hits = response.data.hits;
      setData(hits);
    };
    fetchHn();
  }, [url]);

  return [data, setUrl as any];
};

export default useFetchHn;
