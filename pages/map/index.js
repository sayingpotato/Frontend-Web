import { useEffect, useState, useRef } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import { BiCurrentLocation } from 'react-icons/bi'

import { StyledMapDiv, StyledMap, StyledMapButton, Div, Hone } from './style'

import currentLocation from '../../utils/getCurrentLocation'

const KaKaoMap = () => {
  const foodSrc =
    'https://user-images.githubusercontent.com/44117975/226111201-c9dc37f4-cd7a-49d3-8d18-303852bb996b.png'

  const cafeSrc = 'https://img.lovepik.com/element/40050/4595.png_860.png'

  const imageSize = { width: 30, height: 30 }

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

  const mapRef = useRef()

  const [currentCenter, setCurrentCenter] = useState({ lat: 0, lng: 0 })

  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  })

  const [openPopUp, setOpenPopUp] = useState(false)

  const handleMarkerClick = (e) => {
    setCenter({
      lat: e.getPosition().getLat(),
      lng: e.getPosition().getLng(),
    })
    setOpenPopUp(!openPopUp)
  }

  const MapResult = data.map((oneData) => {
    return (
      <MapMarker
        key={`${oneData.id}`}
        position={{ lat: `${oneData.lat}`, lng: `${oneData.lng}` }}
        image={{
          src: oneData.category === 'food' ? foodSrc : cafeSrc,
          size: imageSize,
        }}
        opacity={oneData.status === 'TODAY_DISCOUNT' ? 1 : 0.5}
        onClick={handleMarkerClick}
      />
    )
  })

  useEffect(() => {
    currentLocation()
      .then((result) => {
        setCurrentCenter({
          lat: result.latitude,
          lng: result.longitude,
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }, [currentCenter])

  useEffect(() => {
    setCenter({
      lat: currentCenter.lat,
      lng: currentCenter.lng,
    })
  }, [currentCenter.lat, currentCenter.lng])

  const refreshButtonClick = () => {
    setCurrentCenter({
      lat: 0,
      lng: 0,
    })
  }

  return (
    <StyledMapDiv>
      <StyledMap center={center} ref={mapRef}>
        {MapResult}
      </StyledMap>
      <StyledMapButton onClick={refreshButtonClick} state={openPopUp}>
        <BiCurrentLocation size={40} />
      </StyledMapButton>
      <Div state={openPopUp}>
        <Hone state={openPopUp}>123</Hone>
      </Div>
    </StyledMapDiv>
  )
}

export default KaKaoMap
