import styled from 'styled-components';

const StyledInlineButtontDiv = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  gap: 5px;
  padding: 0;

  &.center {
    justify-content: center;
  }

  &.find {
    display: flex;
    justify-content: space-evenly;
    color: #7B7B7B;
    margin-bottom: 24px;
    font-size: 14px;
  }
`

export { StyledInlineButtontDiv };