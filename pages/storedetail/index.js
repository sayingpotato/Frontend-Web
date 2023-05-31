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
            menus : {
                image1 : {
                    src : 'images/storeImage.svg',
                    name : '아이스 아메리카노',
                    price : '3500원',
                    rank : 'images/bronzeMedalColor.svg',
                },
                image2 : {
                    src : 'images/storeImage.svg',
                    name : '아이스 아메리카노2',
                    price : '4000원',
                    rank : '',
                },
                image3 : {
                    src : 'images/storeImage.svg',
                    name : '카페라떼3',
                    price : '6000원',
                    rank : 'images/silverMedalColor.svg',
                },
                image4 : {
                    src : 'images/storeImage.svg',
                    name : '카페라떼3',
                    price : '6000원',
                    rank : 'images/goldMedalColor.svg',
                },
                image5 : {
                    src : 'images/storeImage.svg',
                    name : '카페라떼3',
                    price : '6000원',
                    rank : '',
                },
            }
        }
    ]

    return (
        <div>
            <StoredetailTemplate data={data}/>
        </div>
    );
};

export default storedetail;