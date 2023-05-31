import { MenuInfoDiv } from './style';

import Image from "@atoms/image"
import InlineText from '@molecules/inlineText';

const MenuInfo = ({name, price, rank}) => {

    return (
        <MenuInfoDiv>  
            <Image src={rank} alt={rank} />
            <InlineText text1={name} text2={price} text1ClassName="storeDetailMenuTitle" text2ClassName="storeDetailPrice" />
        </MenuInfoDiv>
    );
};

export default MenuInfo;