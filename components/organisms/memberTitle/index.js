import { MemberTitleDiv, TitleTop, TitleUnder } from './style';

import Text from "@atoms/text"

const MemberTitle = ( {title, subTitle} ) => {
    return (
        <>
            <MemberTitleDiv>
                <TitleTop>
                    <Text className='membertitle' text={title} />
                </TitleTop>
                <TitleUnder>
                    <Text className='description' text={subTitle} />
                    <Text className='logo' text="감자입니다" />
                </TitleUnder>
            </MemberTitleDiv>
        </>
    )
}

export default MemberTitle