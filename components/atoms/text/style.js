import styled from 'styled-components';

const StyledText = styled.p`

  &.storeName {
    font-size: 15px;
    font-weight: 700;
  }

  &.minDiscount {
    font-size: 8px;
    font-weight: 900;
    color: white;
    border: 1px solid #4aa406;
    border-radius: 1px;
    background-color: #4aa406;
    height: 10px;
    padding: 3px 5px 3px 5px;
    text-align : center;
    width : 30px;
  }

  &.maxDiscount {
    font-size: 8px;
    font-weight: 900;
    color: white;
    border: 1px solid #ff2e2e;
    border-radius: 1px;
    background-color: #ff2e2e;
    height: 10px;
    padding: 3px 5px 3px 5px;
    text-align : center;
    width : 30px;
  }

  &.reviewMenuName {
    font-size: 13px;
    font-weight: 500;
    margin-left: 5%;
  }

  &.reviewName {
    font-size: 13px;
    font-weight: 700;
  }
`

export { StyledText };