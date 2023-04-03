import {
  MarkerInfoDiv,
  PName,
  PStatus,
  PAddress,
  PTime,
  PCall,
  icon,
} from './style'
import { GiPositionMarker } from 'react-icons/gi'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { IoIosCall } from 'react-icons/io'

const MarkerInformation = (props) => {
  const handleMoreMarkerInfo = () => {
    console.log('페이지 이동')
  }
  return (
    <div onClick={handleMoreMarkerInfo}>
      <MarkerInfoDiv>
        <div>
          <PName>{props.info['name']}</PName>
          <PStatus status={props.info['status'] === 'OPEN' ? 'green' : 'red'}>
            {props.info['status'] === 'OPEN' ? '영업중' : '영업 종료'}
          </PStatus>
        </div>
        <div>
          <GiPositionMarker className="icon" />
          <PAddress>{props.info['address']}</PAddress>
        </div>
        <div>
          <AiOutlineClockCircle className="icon" />
          <PTime>{props.info['time']}</PTime>
        </div>
        <div>
          <IoIosCall className="icon" />
          <PCall>{props.info['call']}</PCall>
        </div>
      </MarkerInfoDiv>
    </div>
  )
}

export default MarkerInformation
