import { style } from './style.js'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

const KaKaoMap = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: '100%', height: '100%' }}
      ></Map>
    </div>
  )
}

export default KaKaoMap
