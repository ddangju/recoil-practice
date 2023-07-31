import { useLocation } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

interface RouteState {
  state: {
    name: string;
  };
}
function Coin() {
  const [loading, setLoading] = useState(true);
  const { state } = useLocation() as RouteState;
  console.log(state.name);
  // const { coinId } = useParams();
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
