import styled from "styled-components";

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: stretch;

    button {
      padding: 8px 24px;
      height: 36px;
      border-radius: 4px;
      border: none;
      background-color: #1e3f19ff;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }
    
    button:hover {
      background-color: #295723ff;
    }

    > :nth-child(2) {
      display: flex;
      gap: 24px
    }

    @media (max-width: 480px) {
      width: 90vw;

      > :nth-child(2) {
        flex-direction:column
      }
    }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    margin-bottom: 8px;
  }

  input {
    padding: 8px;
    border-radius: 4px;
    border: none ;
  }
`