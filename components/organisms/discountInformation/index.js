import { Div, ContentDiv } from './style';

import Image from "@atoms/image"
import Text from "@atoms/text";
import ImageText from '@molecules/imageText';

const DiscountInformation = ({discountData}) => {

    console.log(discountData)
    const daysOfWeek = [["일요일", "SUN"], ["월요일", "MON"], ["화요일", "TUE"], ["수요일", "WED"], ["목요일", "THU"], ["금요일", "FRI"], ["토요일", "SAT"]];
    

    return (
        <>
            <Text text="어메이징한 할인 이벤트" className="discountInfoTitle" />
            <Div>
                {discountData && discountData.map((item, index) => {
                return (
                    <ContentDiv key={index}>
                        <Text text={item.discountDay} className="discountInfoDay" />
                        <Text text={item.people + "명"} className="discountInfoPeople" />
                        <Text text={item.discountRatio + "%"} className="discountInfoRatio" />
                    </ContentDiv>
                )
                })}
            </Div>
        </>
    );
};

export default DiscountInformation;