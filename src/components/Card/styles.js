import styled from "styled-components";

export const Container = styled.div`
  background-color: #1e1f22;

  margin-bottom: 45px;

  color: white;

  width: 452px;

  border: 1px solid transparent;

  &:hover {
    border: 1px solid white;
  }

  img {
    width: 450px;
    height: 300px;
  }

  .info {
    display: flex;
    flex-direction: column;

    padding: 10px;
  }

  p {
    margin-bottom: 25px;
    color: rgb(150, 150, 150);
  }

  button {
    width: 80%;
    height: 32px;
    margin: auto;

    font-weight: 600;

    color: white;

    background-color: #d63d00;

    border: none;
    border-radius: 8px;

    margin-bottom: 25px;
  }
`;
