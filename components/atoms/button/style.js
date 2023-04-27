import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid black;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;

  &.large {
    background-color: blue;
  }
`

export { StyledButton };