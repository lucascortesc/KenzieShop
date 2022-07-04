import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 15%;

  border-bottom: 2px solid #e6e6e6;

  .container {
    display: flex;
    align-items: center;

    height: 100%;
    gap: 35px;
  }

  button {
    background-color: white;

    display: flex;
    align-items: center;

    border: none;
    border-radius: 50%;
  }

  button:hover {
    filter: brightness(0.9);
  }

  .logo:hover {
    cursor: pointer;
    color: rgb(100, 100, 100);
  }
`;
