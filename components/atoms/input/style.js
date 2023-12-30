import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &.orderPeopleInput {
    height : 15px;
    font-size : 13px;
    text-align: center;
  }

  &.memberInput {
    width: 264px;
    border-radius: 16px;
    padding: 20px;
    border: none;
    background-color: #F4F4F4;

    :focus {
        outline: none;
    }

    ::placeholder {
        font-family: 'Pretendard Variable';
        font-weight: 600;
    }
  }

  &.registerInput {
    border: 0px solid #D9D9D9;
    border-bottom: 2px solid ${props => props.state === 2? '#387D04' : props.state === 1 ? '#FF0000' : '#D9D9D9'};
    width: 70%;

    :focus-visible {
        font-family: 'Pretendard Variable';
        outline : none;
        font-weight: 600;
    }
  }
`

export { StyledInput };