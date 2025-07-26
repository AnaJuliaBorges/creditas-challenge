import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  p {
    font-style: italic;
    color: #9b9a9aff
  }

  h2 {
    padding: 0 0 8px 0;
  }

  @media (max-width: 480px) {
    width: 90vw;
  }

`

export const Table = styled.table`
  th {
    text-align: start;
    background-color: #295723ff;
    padding: 8px;
  }

  td {
    padding: 4px;
    background-color: #dfdcffff;
    color: #14111a;
  }

  tr > :nth-child(1) {
    width: 200px;
  }

  tr > :nth-child(2) {
    width: 120px;
  }
`