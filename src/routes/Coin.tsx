import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ITag, InfoData, RouteState } from '../types/CoinType';


const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
  color: ${(props) => props.theme.accentColor};
`;

function Coin() {
  const [loading, setLoading] = useState(true);
  const { state } = useLocation() as RouteState;
  const [coin, setCoin] = useState();
  const { coinId } = useParams();
  const [ihfo, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});
  useEffect(() => {
    (async () => {
      const infoData = await( await fetch(
        `https://api.coinpaprika.com/v1/coins/${coinId}`
      )).json()
      const priceData =  await( await fetch(
        `https://api.coinpaprika.com/v1/tickers/${coinId}`
      )).json()
      console.log(priceData)

      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  }, [coinId]);
  return (
    <Container>
      <Header>
        <Title>코인{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

export default Coin;
