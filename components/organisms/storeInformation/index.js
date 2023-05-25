import { StoreInformationDiv, TextInfoDiv } from './style';

import Image from "@atoms/image"
import ImageText from '@molecules/imageText';

const StoreInformation = ({address, time, call, concent, rank}) => {
    return (
        <>
        <ImageText src="images/position.svg" text={address} divClassName="storeInformationPostion"/>
            <StoreInformationDiv>
                <TextInfoDiv>
                    <ImageText src="images/clock.svg" text={time} />
                    <ImageText src="images/call.svg" text={call} />
                    <ImageText src="images/concent.svg" text={concent} />
                    <ImageText src="images/rank.svg" text={rank} />
                </TextInfoDiv>
                <Image src="images/seating.svg" alt="images/seating.svg" />
            </StoreInformationDiv>
        </>
    );
};

export default StoreInformation;