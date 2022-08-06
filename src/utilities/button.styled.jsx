import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline-block;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  padding: 4px;
  margin-left: 10px;
  text-transform: capitalize;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;

  &:hover,
  &:focus {
    background: lightgreen;
  }
`;
