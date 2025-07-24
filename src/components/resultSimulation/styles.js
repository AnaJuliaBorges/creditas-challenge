import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
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