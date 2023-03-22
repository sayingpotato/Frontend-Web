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
  top: 3%;
  border: none;
  z-index: 2;
  background-color: transparent;
`

export { StyledMapDiv, StyledMap, StyledMapButton }
