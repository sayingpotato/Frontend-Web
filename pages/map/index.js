import { useEffect, useState, useRef } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import { BiCurrentLocation } from 'react-icons/bi'

import { StyledMapDiv, StyledMap, StyledMapButton } from './style'

import currentLocation from '../../utils/getCurrentLocation'

const KaKaoMap = () => {
  let data = [
    {
      id: 1,
      lat: 36.6283,
      lng: 127.456,
      name: '우체국',
    },
    {
      id: 2,
      lat: 36.628,
      lng: 127.453,
      name: '병원',
    },
  ]

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
    <StyledMapDiv>
      <StyledMap center={state.center} ref={mapRef}>
        {data.map((d) => (
          <MapMarker
            key={`${d.key}`}
            position={{ lat: `${d.lat}`, lng: `${d.lng}` }}
          ></MapMarker>
        ))}
        <StyledMapButton onClick={refreshButtonClick}>
          <BiCurrentLocation size={40} />
        </StyledMapButton>
      </StyledMap>
    </StyledMapDiv>
  )
}

export default KaKaoMap
