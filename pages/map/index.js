import { useEffect, useState, useRef } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

import currentLocation from '../../utils/getCurrentLocation'

const KaKaoMap = () => {
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)

  const [state, setState] = useState({
    center: { lat: lat, lng: lng },
  })
  const mapRef = useRef()

  useEffect(() => {
    currentLocation()
      .then((result) => {
        setLat(result.latitude)
        setLng(result.longitude)
        setState({
          center: { lat: result.latitude, lng: result.longitude },
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }, [state])

  const refreshButtonClick = () => {
    const map = mapRef.current
    let clat = map.getCenter().getLat()
    let clng = map.getCenter().getLng()

    setState({
      center: { lat: clat, lng: clng },
    })
  }

  return (
    <div style={{ height: '100vh' }}>
      <button onClick={refreshButtonClick}>Refresh</button>
      <Map center={state.center} style={{ height: '100%' }} ref={mapRef}>
        <button onClick={refreshButtonClick}>Refresh</button>
      </Map>
    </div>
  )
}

export default KaKaoMap
