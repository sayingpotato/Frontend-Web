import { style } from './style.js'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

const KaKaoMap = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ height: '100%' }}>
        <button>새로고침</button>
      </Map>
    </div>
  )
}

export default KaKaoMap
