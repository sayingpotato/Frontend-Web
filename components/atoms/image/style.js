import styled from 'styled-components';

const StyledImage = styled.img`
  &.imageLayoutImage {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &.imageLayoutMiddleImage {
    width: 100%;
    height: 50%;
    object-fit: contain;
  }
  &.todayDiscountLogoImage {
    width: 60px;
    height: 60px;
    display: block;
    margin: auto;
  }
  &.storeInfoIcon {
    width : 20px;
    height : 20px;
  }
  &.mypageMoneyIcon {
    width : 30px;
    height : 30px;
  }
  &.storeRoomImage {
    width : 200px;
    height : 120px;
  }
  &.storeImage {
    width : 60px;
    height : 60px;
  }
  &.menuImage {
    width : 100px;
    height : 100px;
  }
  &.whoLogo {
    width: 80px;
    height: 80px;
    display: block;
    margin: auto;
  }
  &.mystoreImage {
    width: 100px;
    height: 100px;
    display: block;
    margin: auto;
  }
  &.logoImage {
    width : 30px;
    height : 30px;
  }
  &.right {
    padding-top: 8px;
    margin-left: auto;
  }
  &.agreeIcon {
    margin-right: 12px;
  }
`

export { StyledImage };