import { useState, useRef, useEffect } from "react";

import { forwardRef, useImperativeHandle } from 'react';
import { InfoDiv } from './style';

import Text from '@atoms/text'
import Image from '@atoms/image'


const RegisterStudentCard = forwardRef((props, ref) => {

    // styled-component에서는 ref 값을 props로 전달 불가능 -> forwardRef 이용
    const internalRef = useRef();
    RegisterStudentCard.displayName = "file"; // error Component definition is missing display name react/display-name 해결

    useImperativeHandle(ref, () => ({
        handleClick() {
            internalRef.current.click();
        }
    }))

    return (
        <InfoDiv>
            <Text text={props.text} className="registerTitle" />
            <input ref={internalRef} type="file" onChange={props.inputOnChange} style={{ display : "none" }} />
            <Image onClick={props.imageOnClick} className="imagePreview" src={props.src} alt="학생증 미리보기" />
        </InfoDiv>
    )
})

export default RegisterStudentCard