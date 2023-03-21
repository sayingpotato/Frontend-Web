import { useEffect, useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

import { style } from './style.js'
import currentLocation from '../../utils/getCurrentLocation'

const KaKaoMap = () => {
  const [location, setLocation] = useState(null)
  const [lat, setLet] = useState(36.1)
  const [lng, setLng] = useState(36.1)

  useEffect(() => {
    currentLocation()
      .then((result) => {
        setLocation(result)
        setLet(result.latitude)
        setLng(result.longitude)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  return (
    <div style={{ height: '100vh' }}>
      <Map
        center={{ lat: `${lat}`, lng: `${lng}` }}
        style={{ height: '100%' }}
      ></Map>
    </div>
  )
}

export default KaKaoMap
