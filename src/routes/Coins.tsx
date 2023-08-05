// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { ICoin } from "../types/Coin";
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-item: center;
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 10px;
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
  a {
    transition: color 0.2s ease-in;
    display: block;
    padding: 20px;
  }
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
  color: ${(props) => props.theme.accentColor};
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
`;

function Coins() {
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //     const json = await response.json();
  //     setCoins(json.slice(0, 50));
  //     setLoading(false);
  //   })();
  // }, []);

  ///react query apply
  // useQuery(queryKey, fetchPosts)
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  console.log(data, "<data");
  return (
    <Container>
      <Header>
        <Title>coins</Title>
      </Header>
      {
        <CoinsList>
          {isLoading ? (
            <Loader>Loading</Loader>
          ) : (
            data?.slice(0, 20).map((coin, idx) => (
              <Coin key={coin.id}>
                <Img
                  alt="img"
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                />
                <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                  {coin.name} &rarr;
                </Link>
              </Coin>
            ))
          )}
        </CoinsList>
      }
    </Container>
  );
}

export default Coins;
