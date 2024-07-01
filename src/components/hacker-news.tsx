import React, { useState } from "react";
import useHackerNewsApi from "../hooks/useHackerNewsApi";

const hnSearhcApi = "https://hn.algolia.com/api/v1/search";
const HackerNews = () => {
  const [q, setQ] = useState<string>("react");
  const [{ data, isLoading, isError }, setUrl] = useHackerNewsApi(
    `${hnSearhcApi}?query=${q}`,
    { hits: [] }
  );

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setUrl(`${hnSearhcApi}?query=${q}`);
  };

  return (
    <>
      <div className="search--wrapper">
        <form onSubmit={handleSubmit}>
          <input
            value={q}
            placeholder="input here..."
            onChange={(e) => setQ(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {isError && <div className="error--text">Something went wrong ...</div>}
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <ul>
          {data.hits.map(({ title, url }, idx) => (
            <li key={`${title}-${idx}`}>
              <a target="_blank" href={url}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default HackerNews;
