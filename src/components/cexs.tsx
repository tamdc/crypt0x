import React from "react";
import useCoinMarketCapApi from "../hooks/useCoinMarketCapApi";
import { CMC_EXCHANGE_HOST } from "../constants";

const CEXs = () => {
  const [{ data, isLoading, isError }, setUrl] = useCoinMarketCapApi(
    `${CMC_EXCHANGE_HOST}/info`,
    {
      data: null,
      isLoading: false,
      isError: false,
    }
  );

  console.log("data", data);
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
                  <th>Exchange</th>
                  <th>Score</th>
                  <th>Trading volume</th>
                  <th>Visits</th>
                  <th>Coins</th>
                </tr>
              </thead>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default CEXs;
