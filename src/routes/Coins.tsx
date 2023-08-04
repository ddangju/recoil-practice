// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { ICoin } from "../types/Coin";
import {Helmet} from "react-helmet";
import { useOutletContext } from 'react-router-dom';


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

interface IToggle{
  toggleDark: () => void,
}
interface ICoinProps {
  isDark: boolean;
}

function Coins() {
  const {toggleDark} = useOutletContext<IToggle>();
  const {isDark} = useOutletContext<ICoinProps>();

  ///react query apply
  // useQuery(queryKey, fetchPosts)
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins,{refetchOnWindowFocus:false});

  return (
    <Container>
      <Helmet>
        Coin
      </Helmet>
      <Header>
        <Title>coins</Title>
        <button onClick={toggleDark}>toggle</button>
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
                <Link to={`/${coin.id}`} state={{ name: coin.name, isdark: isDark}}>
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
