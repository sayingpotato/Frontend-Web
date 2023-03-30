import styled from 'styled-components'
import { Map } from 'react-kakao-maps-sdk'

const StyledMapDiv = styled.div`
  height: 100vh;
  width: 100vw;
`

const StyledMap = styled(Map)`
  z-index: 1;
  height: 100%;
  width: inherit;
`

const StyledMapButton = styled.button`
  position: absolute;
  bottom: ${(props) => (props.state === true ? '33%' : '3%')};
  border: 1px solid white;
  z-index: 2;
  border-radius: 50%;
  background-color: white;
  right: 3%;
  width: 60px;
  height: 60px;
`

const StyledListButton = styled.button`
  position: absolute;
  bottom: ${(props) => (props.state === true ? '41%' : '11%')};
  border: 1px solid white;
  z-index: 2;
  border-radius: 13%;
  background-color: white;
  right: 3%;
  width: 120px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ListName = styled.p`
  font-size: 12px;
  display: inline;
  margin-left: 7%;
  top: 50%;
  left: 50%;
  font-weight: 300;
`

const listIcon = styled.nav`
  top: 50%;
  left: 50%;
`

const Div = styled.div`
  position: absolute;
  bottom: 0%;
  background-color: white;
  z-index: 2;
  width: inherit;
  height: 30%;
  display: ${(props) => (props.state === true ? 'inline-block' : 'none')};
  border-radius: 40px 40px 0px 0px;
  box-shadow: 0px -10px 10px grey;
  border: 1px solid black;
`

export {
  StyledMapDiv,
  StyledMap,
  StyledMapButton,
  StyledListButton,
  ListName,
  Div,
  listIcon,
}
