import { useLocation, useParams, Link, Outlet, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { InfoData, RouteState, PriceData } from "../types/CoinType";
import { useQuery } from "react-query";
import { fetchCoin, fetchTickers } from "../api";
import {Helmet} from "react-helmet";

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

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ $isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.$isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;


function Coin() {
  // const {isDark} = useOutletContext<ICoinProps>();

  const { state } = useLocation() as RouteState;



  const { coinId } = useParams();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  // const { isLoading, data } = useQuery<InfoData[]>(["info",coinId], fetchCoin(coinId),{refetchOnWindowFocus:false});
// fetch함ㅅ에 인자가 필요하다면 아래왁 같이 작성해주어야함
  const { isLoading:infoLoading, data:infoData } = useQuery<InfoData>(["info",coinId], () => fetchCoin(coinId));
  const { isLoading:tickersLoading, data:tickersData } = useQuery<PriceData>(["tickers",coinId], () => fetchTickers(coinId));
  
  const loading = infoLoading || tickersLoading;

  const navigate = useNavigate()
  const onClick = () =>{
    navigate("/")
  }

  
  return (
    <Container>
      <Helmet>
        <title>{state?.name ? state?.name : loading ? "Loading..." : infoData?.name}</title>
      </Helmet>
      <Header>
        <button onClick={onClick}>back</button>
        <Title>
          {state?.name ? state?.name : loading ? "Loading..." : infoData?.name}
        </Title>
      </Header>
        <Overview>
          <OverviewItem>
            <span>Rank:</span>
            <span>{infoData?.rank}</span>
          </OverviewItem>
          <OverviewItem>
            <span>Symbol:</span>
            <span>${infoData?.symbol}</span>
          </OverviewItem>
          <OverviewItem>
            <span>Price:</span>
            <span>${tickersData?.quotes.USD.price.toFixed(0)}</span>
          </OverviewItem>
        </Overview>
        <Description>{infoData?.description}</Description>
        <Overview>
          <OverviewItem>
            <span>Total Supply:</span>
            <span>{tickersData?.total_supply}</span>
          </OverviewItem>
          <OverviewItem>
            <span>Max Supply:</span>
            <span>{tickersData?.max_supply}</span>
          </OverviewItem>
        </Overview>
        <Tabs>x
            <Tab $isActive={priceMatch !== null}>
              <Link to="price">price</Link>
            </Tab>
            <Tab $isActive={chartMatch !== null}>
              <Link to="chart" state={[coinId]}>chart</Link>
            </Tab>
          </Tabs>
        <Outlet></Outlet>
    </Container>

  );
}

export default Coin;
