import Image from 'next/image'

import { MenuWholeDiv, MenuDiv, MenuName } from './style'

const StorelistMenu = (props) => {
  const menuList = JSON.parse(props.menu)
  return (
    <MenuWholeDiv>
      <MenuDiv>
        <Image
          src={`/images/goldMedal.png`}
          alt="금메달"
          width={10}
          height={10}
        />
        <MenuName>{`${menuList['firstTopMenu']}`}</MenuName>
      </MenuDiv>
      <MenuDiv>
        <Image
          src={`/images/silverMedal.png`}
          alt="은메달"
          width={10}
          height={10}
        />
        <MenuName>{`${menuList['secondTopMenu']}`}</MenuName>
      </MenuDiv>
      <MenuDiv>
        <Image
          src={`/images/bronzeMedal.png`}
          alt="동메달"
          width={10}
          height={10}
        />
        <MenuName>{`${menuList['thirdTopMenu']}`}</MenuName>
      </MenuDiv>
    </MenuWholeDiv>
  )
}

export default StorelistMenu
