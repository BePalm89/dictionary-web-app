import styled from "styled-components";

const Container = styled.div`
  max-width: 750px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: var(--padding-3) 0;
  @media (max-width: 768px) {
    width: 100%;
    padding: var(--padding-2) var(--padding-1)
  }
`;

export default Container;
