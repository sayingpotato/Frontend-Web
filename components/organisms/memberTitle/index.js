import { MemberTitleDiv, TitleUnder } from './style';

import Text from "@atoms/text"
import ImageTitle from '@molecules/imageTitle';

const MemberTitle = ( {title, subTitle} ) => {
    return (
        <>
            <MemberTitleDiv>
                <Text className='membertitle' text={title} />
                <TitleUnder>
                    <Text className='description' text={subTitle} />
                    <ImageTitle imageClassName="logoImage" textClassName="logo" src="/images/potato.svg" alt="로고" text="감자입니다" />
                </TitleUnder>
            </MemberTitleDiv>
        </>
    )
}

export default MemberTitle