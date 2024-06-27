import axios from "axios";
import React, { useState } from "react";
import debounce from "../utils/debounce";

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

const hnSearhcApi = "https://hn.algolia.com/api/v1/search";
const HackerNews = () => {
  const [q, setQ] = React.useState<string>("redux");
  const [result, setResult] = useState<HNResultItem[]>([]);

  React.useEffect(() => {
    let timer;
    const fetchData = async () => {
      const response: HNSearchRes = await axios(`${hnSearhcApi}?query=${q}`);
      const hits = response.data.hits || [];
      setResult(hits);
    };
    timer = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearTimeout(timer);
  }, [q]);

  return (
    <>
      <div className="search--wrapper">
        <input
          value={q}
          placeholder="input here..."
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <ul>
        {result.map(({ title, url, story_id }) => (
          <li key={story_id}>
            <a target="_blank" href={url}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HackerNews;
