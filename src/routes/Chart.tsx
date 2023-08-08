import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import { IHistorical } from "../types/Coin";
import ApexChart from "react-apexcharts";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../store/atoms";

export interface ChartProps {
  coinId: string;
}

function Chart() {
  const { state } = useLocation();
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", state[0]], () =>
    fetchCoinHistory(state[0])
  );
  const [priceData, setPriceData] = useState<IHistorical[]>([]);

  const isDark = useRecoilValue(isDarkAtom);

  useEffect(() => {
    if (!data) {
      return;
    } else {
      setPriceData(data);
    }
  }, [data]);
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              ///data의 경우 처음 렌더때는 undefined이기 때문에 값이 없다는 Error가 나온다
              data: priceData.map((price) => Number(price.close)),
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: true,
              },
              background: "transparent",
            },
            grid: { show: true },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
            },
            colors: ["#0fbcf9"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
