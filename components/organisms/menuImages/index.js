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
    const submitOrderMenu = () => {
        console.log("주문하기");
        
        const selectedObjects = selectedMenuIds.map(targetId => {
        const foundObject = menuData.find(item => item.id === targetId);
            return foundObject || null;
        });

        if (selectedObjects.length === 0) {
            alert("하나 이상 주문하세요.")
        } else {
            selectedObjects.forEach(obj => {
                if (obj) {
                    console.log(obj)
                    sum += obj.price
                } else {
                    console.log(`해당 id를 가진 객체를 찾지 못했습니다.`);
            }
        });
        }

        console.log(sum)
    }
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