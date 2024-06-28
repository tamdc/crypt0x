import React, { useEffect, useState } from "react";
import useFetchHn from "../utils/useFetchHn";

const hnSearhcApi = "https://hn.algolia.com/api/v1/search";
const HackerNews = () => {
  const [q, setQ] = useState<string>("react");
  const [data, setUrl] = useFetchHn(`${hnSearhcApi}?query=${q}`);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUrl(`${hnSearhcApi}?query=${q}`);
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
        {data.map(({ title, url }, idx) => (
          <li key={`${title}-${idx}`}>
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
