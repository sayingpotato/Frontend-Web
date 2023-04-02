import styled from 'styled-components'

const Title = styled.p`
  font-weight: 800;
  font-size: 20px;
  text-align: center;
`

const DataDiv = styled.div`
  border: 1px solid black;
  border-radius: 1px 1px 5px 5px;
  width: 90%;
  box-shadow: -5px 5px 5px -5px;
  margin: 0 auto;
  height: 50%;
  margin-bottom: 5%;
`

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
`

const StoreName = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin-left: 5%;
  margin-right: 5%;
`

const StoreMin = styled.p`
  font-size: 8px;
  margin-right: 2%;
  font-weight: 900;
  color: white;
  padding: 1% 2.5% 1% 2.5%;
  border: 1px solid #4aa406;
  border-radius: 1px;
  background-color: #4aa406;
`

const StoreMax = styled.p`
  font-size: 8px;
  font-weight: 900;
  color: white;
  padding: 1% 2.5% 1% 2.5%;
  border: 1px solid #ff2e2e;
  border-radius: 1px;
  background-color: #ff2e2e;
`

const ContentDiv = styled.div`
  display: flex;
`

export { Title, DataDiv, TitleDiv, StoreName, StoreMin, StoreMax, ContentDiv }
