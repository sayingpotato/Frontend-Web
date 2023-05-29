import { useEffect, useState, useRef } from 'react'
import Router, { useRouter } from 'next/router'

import StoredetailTemplate from '@templates/storedetailTemplate'

import {  } from './style';

const storedetail = () => {

    let data = [
        {
            id : 1,
            name : '좋은 원두',
            address : '충북 청주시 서원구 1순환로 672',
            time : '월요일',
            call : '043-271-0707',
            concent : '콘센트 8개',
            rank : '1위 무질서도',
            roomImage : 'images/seating.svg',
            storeImages : [{
                image1 : 'images/storeImage.svg',
                image2 : 'images/storeImage.svg',
                image3 : 'images/storeImage.svg',
                image4 : 'images/storeImage.svg',
            }],
            menuImages : [{
                image1 : 'images/storeImage.svg',
                image2 : 'images/storeImage.svg',
                image3 : 'images/storeImage.svg',
            }],
            menuNames : [{
                image1 : '아이스 아메리카노',
                image2 : '카페라떼',
                image3 : '배고파요',
            }]
        }
    ]

    return (
        <div>
            <StoredetailTemplate data={data}/>
        </div>
    );
};

export default storedetail;