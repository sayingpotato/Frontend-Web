import { useEffect, useState, useRef } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import { BiCurrentLocation } from 'react-icons/bi'

import { StyledMapDiv, StyledMap, StyledMapButton } from './style'

import currentLocation from '../../utils/getCurrentLocation'

const KaKaoMap = () => {
  const foodSrc =
    'https://cglink.com/files/attach/images/2291/635/661/a9a7ea055b072f7cf3e6e4d671e60c74.jpg'

  const cafeSrc = 'https://img.lovepik.com/element/40050/4595.png_860.png'

  const imageSize = { width: 22, height: 26 }

  let data = [
    {
      id: 1,
      lat: 36.6283,
      lng: 127.456,
      name: '우체국',
      status: 'TODAY_DISCOUNT',
      category: 'food',
    },
    {
      id: 2,
      lat: 36.6283,
      lng: 127.436,
      name: '병원',
      status: 'NONE',
      category: 'cafe',
    },
    {
      id: 3,
      lat: 36.6283,
      lng: 127.486,
      name: '우체국1',
      status: 'TODAY_DISCOUNT',
      category: 'food',
    },
  ]

  const MapResult = data.map((oneData) => {
    if (oneData.status === 'TODAY_DISCOUNT') {
      if (oneData.category === 'food') {
        return (
          <MapMarker
            key={`${oneData.id}`}
            position={{ lat: `${oneData.lat}`, lng: `${oneData.lng}` }}
            image={{
              src: foodSrc,
              size: imageSize,
            }}
          />
        )
      }
      if (oneData.category === 'cafe') {
        return (
          <MapMarker
            key={`${oneData.id}`}
            position={{ lat: `${oneData.lat}`, lng: `${oneData.lng}` }}
            image={{
              src: cafeSrc,
              size: imageSize,
            }}
          />
        )
      }
    } else {
      if (oneData.category === 'food') {
        return (
          <MapMarker
            key={`${oneData.id}`}
            position={{ lat: `${oneData.lat}`, lng: `${oneData.lng}` }}
            image={{
              src: foodSrc,
              size: imageSize,
            }}
            opacity={0.5}
          />
        )
      }
      if (oneData.category === 'cafe') {
        return (
          <MapMarker
            key={`${oneData.id}`}
            position={{ lat: `${oneData.lat}`, lng: `${oneData.lng}` }}
            image={{
              src: cafeSrc,
              size: imageSize,
            }}
            opacity={0.5}
          />
        )
      }
    }
  })

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
        {MapResult}
        <StyledMapButton onClick={refreshButtonClick}>
          <BiCurrentLocation size={40} />
        </StyledMapButton>
      </StyledMap>
    </StyledMapDiv>
  )
}

export default KaKaoMap
