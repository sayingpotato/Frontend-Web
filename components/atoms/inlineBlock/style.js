import styled from 'styled-components';

const StyledInlineBlock = styled.input`
  border: 3px solid black;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;

  &.blue {
    background-color: blue;
  }
`

export { StyledInlineBlock };