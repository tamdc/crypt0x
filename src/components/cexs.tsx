import React from "react";
import useCoinMarketCapApi from "../hooks/useCoinMarketCapApi";
import { ExchangeInfo } from "../types";

const CEXs = () => {
  const [{ data, isLoading, isError }, setUrl] = useCoinMarketCapApi(
    "/api/exchanges",
    {
      data: [],
      isLoading: false,
      isError: false,
    }
  );

  return (
    <>
      <div>
        <section>
          <h1 className="summary_header-title">
            Top Crytocurency Spot exchanges
          </h1>
          <div className="summary_header-desc">
            <span>
              We rank and score exchanges base on traffic, liquidity, trading
              volumes, and confidence in the legitimate of trading volume
              reported.
            </span>
          </div>
        </section>
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? (
          <h3>Loading ...</h3>
        ) : (
          <div className="cexs-table">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th></th>
                  <th>Exchange</th>
                  <th>Score</th>
                  <th>Trading volume</th>
                  <th>Coins</th>
                </tr>
              </thead>
              <tbody>
                {data.map(
                  (
                    {
                      id,
                      name,
                      url,
                      image,
                      trust_score,
                      trade_volume_24h_btc,
                    }: ExchangeInfo,
                    idx: number
                  ) => (
                    <tr key={id}>
                      <td>{idx + 1}</td>
                      <td>
                        <img src={image} alt="exchange logo" />
                      </td>
                      <td>
                        <a href={url} target="_blank">
                          {name}
                        </a>
                      </td>
                      <td>{trust_score}</td>
                      <td>{trade_volume_24h_btc}</td>
                      <td>Coins</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default CEXs;
