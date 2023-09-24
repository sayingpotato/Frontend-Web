import { useEffect, useState } from "react";

import { MenuImagesDiv, MenuWholeImagesDiv, MenuImagesContentDiv, ImagesDiv } from './style';

import Image from "@atoms/image"
import MenuInfo from '@organisms/menuInfo'
import Text from "@atoms/text"

const MenuImages = ({menuData}) => {
    const [selectedMenuIds, setSelectedMenuIds] = useState([]);

    const toggleMenu = (itemId) => {
        setSelectedMenuIds((prevSelectedMenuIds) => {
        if (prevSelectedMenuIds.includes(itemId)) {
            return prevSelectedMenuIds.filter((id) => id !== itemId);
        } else {
            return [...prevSelectedMenuIds, itemId];
        }
        });
    };
    return (
        <>
            <MenuImagesDiv>
                <Text text="메뉴판" className="storeDetailMiniTitle" />
                <MenuWholeImagesDiv>
                    {menuData.map((item, index) => (
                        <MenuImagesContentDiv
                            key={item.id}
                            onClick={() => toggleMenu(item.id)}
                            isSelected={selectedMenuIds.includes(item.id)}
                        >
                            <ImagesDiv>
                            <Image src={item.img} alt={item.img} className="menuImage"/>
                                <MenuInfo name={item.name} price={item.price} rank={item.rank} />
                            </ImagesDiv>
                            {((index + 1) % 3 === 0) && <br />}
                        </MenuImagesContentDiv>
                    ))}
                </MenuWholeImagesDiv>
            </MenuImagesDiv>
        </>
    );
};

export default MenuImages;