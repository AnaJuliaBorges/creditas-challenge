import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  @media (max-width: 480px) {
    h1 {
      width: 90vw;
    }
  }
`