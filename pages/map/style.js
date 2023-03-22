import styled from 'styled-components'
import { Map } from 'react-kakao-maps-sdk'

const StyledMapDiv = styled.div`
  height: 100vh;
`

const StyledMap = styled(Map)`
  z-index: 1;
  height: 100%;
`

const StyledMapButton = styled.button`
  position: absolute;
  bottom: 5%;
  z-index: 2;
  height: 50px;
  width: 50px;
`

export { StyledMapDiv, StyledMap, StyledMapButton }
