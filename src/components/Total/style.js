import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  min-width: 900px;
  background-color: #1e1f22;

  padding: 30px;

  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid transparent;

  &:hover {
    border: 1px solid white;
  }
`;
