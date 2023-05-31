import { StoreInformationDiv, TextInfoDiv } from './style';

import Image from "@atoms/image"
import ImageText from '@molecules/imageText';

const StoreInformation = ({address, time, call, concent, rank, room}) => {
    return (
        <>
        <ImageText src="images/position.svg" text={address} divClassName="storeInformationPostion" textClass="storeDetailInfo" />
            <StoreInformationDiv>
                <TextInfoDiv>
                    <ImageText src="images/clock.svg" text={time} textClass="storeDetailInfo" divClassName="basic" />
                    <ImageText src="images/call.svg" text={call} textClass="storeDetailInfo" divClassName="basic" />
                    <ImageText src="images/concent.svg" text={concent} textClass="storeDetailInfo" divClassName="basic" />
                    <ImageText src="images/rank.svg" text={rank} textClass="storeDetailInfo" divClassName="basic" />
                </TextInfoDiv>
                <Image src={room} alt={room} />
            </StoreInformationDiv>
        </>
    );
};

export default StoreInformation;