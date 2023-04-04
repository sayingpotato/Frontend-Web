import styled from 'styled-components'

const InfoDiv = styled.div`
  background-color: blue;
  height: 13%;
  padding-top: 2%;
`

const TypeButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`

const TypeButton = styled.button`
  width: 55px;
  font-size: 10px;
`

const DayInfoDiv = styled.div`
  display: flex;
  justify-content: space-around;
`

const BackDiv = styled.div`
  background-color: grey;
  padding: 3%;
  height: 70%;
`

const WholeDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
`

export { InfoDiv, TypeButtonDiv, TypeButton, DayInfoDiv, BackDiv, WholeDiv }
