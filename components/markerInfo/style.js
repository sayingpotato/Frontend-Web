import styled from 'styled-components'

const MarkerInfoDiv = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  & > div {
    display: flex;
    gap: inherit;
    align-items: center;
  }
`

const PName = styled.p`
  font-size: 20px;
  display: inline-block;
`

const PStatus = styled.p`
  display: inline-block;
  font-size: 15px;
  color: ${(props) => props.status};
`

const PAddress = styled.p`
  display: inline-block;
  font-size: 10px;
`

const PTime = styled.p`
  display: inline-block;
  font-size: 10px;
`

const PCall = styled.p`
  display: inline-block;
  font-size: 10px;
`

export { MarkerInfoDiv, PName, PStatus, PAddress, PTime, PCall }
