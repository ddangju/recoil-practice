import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { ICoin } from "../types/Coin";
import { Helmet } from "react-helmet";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { isDarkAtom } from "../store/atoms";

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
const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
  border-radius: 15px;
  display: flex;

  align-items: center;
  padding: 10px;
  border: 1px solid white;
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
  ///react query apply
  // useQuery(queryKey, fetchPosts)
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins, {
    refetchOnWindowFocus: false,
  });

  //1)useSetRecoilState //setState와 같이 동작한다
  // const setDarkAtom = useSetRecoilState(isDarkAtom);
  // const toggleDarkAtom = () => setDarkAtom((prev) => !prev);

  //2)useRecoilState //atom값을 가져올때
  const [darkState, setDarkState] = useRecoilState<boolean | undefined>(
    isDarkAtom
  );

  ///3) useRecoilValue
  // const dark = useRecoilValue(isDarkAtom); //atom의 값을 가져올 때

  const toggleDarkAtom = () => {
    setDarkState(!darkState);
    // setDarkState((pre: any) => console.log(pre) as any);
  };

  return (
    <Container>
      <Helmet>Coin</Helmet>
      <Header>
        <Title>coins</Title>
        <button onClick={toggleDarkAtom}>toggle</button>
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
