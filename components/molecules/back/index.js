import { BackDiv } from "./style"
import Router from "next/router";
import Image from "@atoms/image";

export default function Back(){
    
    const onClickBack = () => {
        Router.back();
    }
    
    return (
        <>
            <BackDiv>
                <Image src="images/back.svg" alt="뒤로 가기" className="backArrowImage" onClick={onClickBack} width={42} height={42} />
            </BackDiv>
        </>
    )
}