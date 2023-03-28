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

      value: {
        name: '좋은 원두',
        adress: '충북 청주시',
        time: '월요일',
        call: '041-271-1234',
        today: 0,
        category: 'food',
        status: 'TODAY_DISCOUNT',
      },
    },
    {
      id: 2,
      lat: 36.6283,
      lng: 127.436,

      value: {
        name: '좋은 원두111',
        adress: '충북 청주시111',
        time: '월요일111',
        call: '041-271-12341111',
        today: 1,
        category: 'cafe',
        status: 'NONE',
      },
    },
    {
      id: 3,
      lat: 36.6283,
      lng: 127.486,
      value: {
        name: '좋은 원두222',
        adress: '충북 청주시222',
        time: '월요일222',
        call: '041-271-122222222211',
        today: 1,
        category: 'food',
        status: 'NONE',
      },
    },
  ]

  const mapRef = useRef()

  const [currentCenter, setCurrentCenter] = useState({ lat: 0, lng: 0 })
  const [center, setCenter] = useState({ lat: 0, lng: 0 })
  const [markerInfo, setMarkerInfo] = useState({
    name: '',
    adress: '',
    time: '',
    call: '',
    today: 0,
    category: '',
    status: '',
  })

  const [openPopUp, setOpenPopUp] = useState(false)

  const handleMarkerClick = (e) => {
    setCenter({
      lat: e.getPosition().getLat(),
      lng: e.getPosition().getLng(),
    })
    setOpenPopUp(!openPopUp)
    const info = JSON.parse(e.getTitle())
    setMarkerInfo(info)
  }

  const MapResult = data.map((oneData) => {
    return (
      <MapMarker
        key={`${oneData.id}`}
        position={{ lat: `${oneData.lat}`, lng: `${oneData.lng}` }}
        image={{
          src: oneData.value['category'] === 'food' ? foodSrc : cafeSrc,
          size: imageSize,
        }}
        opacity={oneData.value['status'] === 'TODAY_DISCOUNT' ? 1 : 0.5}
        onClick={handleMarkerClick}
        title={JSON.stringify(oneData.value)}
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
