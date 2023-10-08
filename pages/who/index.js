import { useEffect, useState, useRef, use } from 'react'
import router from "next/router";

import Text from "@atoms/text"
import { ContentDiv } from '../../styles/who/style'

import ImageTitle from '@molecules/imageTitle'

const Who = () => {
    return (
        <div>
            <Text text="누구신가요?" className="whoText"></Text>
            <ContentDiv>
                <ImageTitle imageClassName='whoLogo' textClassNameName='whoAreText' src="/images/whoOwner.png" alt="/images/whoOwner.png" text="점주님" />
            </ContentDiv>
            <ContentDiv>
                <ImageTitle imageClassName='whoLogo' textClassNameName='whoAreText' src="/images/whoOwner.png" alt="/images/whoOwner.png" text="점주님" />
            </ContentDiv>
        </div>
        
    )
}

export default Who;