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
    font-size: 8px;
    font-weight: 500;
  }

  &.todayDiscountLogoName {
    margin: auto;
    font-weight: 600;
    font-size: 10px;
    text-align: center;
  }

  &.mapListName {
    font-size: 12px;
    display: inline;
    font-weight: 400;
  }

  &.markerContentHeaderName {
    font-size: 20px;
    margin: 0;
    font-weight: 600;
  }

  &.markerContentHeaderStatus {
    font-size: 14px;
    color: ${(props) => props.status};
    font-weight: 600;
  }

  &.markerContentInfoText {
    font-size: 12px;
    font-weight: 500;
  }

  &.mypageMoneyTotal {
    font-size : 12px;
    color : white;
    font-weight : 800;
  }

  &.mypageMoneyTitle {
    font-size : 12px;
    color : white;
    font-weight : 800;
    margin-bottom : 0px;
    margin-left : 25px;
  }

  &.mypageUserName {
    font-size : 30px;
    font-weight : 800;
    color : white;
  }

  &.storeDetailMenuTitle {
    font-size : 8px;
    font-weight : 500;
  }

  &.storeDetailMiniTitle {
    font-size : 12px;
    font-weight : 600;
  }

  &.storeDetailInfo {
    font-size : 10px;
  }

  &.storeDetailPrice {
    font-size : 8px;
    color : #8C0909;
    font-weight : 500;
  }

  &.storeDetailReviewTotal {
    font-size : 8px;
    color : #28469C;
    font-weight : 500;
  }

  &.mypageButtonsName {
    font-size : 15px;
    font-weight : 800;
    color : black;
  }

  &.mypageButtonsLogoutName {
    font-size : 15px;
    font-weight : 800;
    color : red;
  }
  
  &.discountContentName {
    font-size:10px;
    font-weight : 500;
    margin-bottom : 1px;
  }

  &.discountContentMoney {
    font-size:10px;
    font-weight : 500;
    margin-top : 1px;
  }

`

export { StyledText };