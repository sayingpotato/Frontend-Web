import { MenuImagesDiv, MenuWholeImagesDiv, ImagesDiv } from './style';

import ImageTitle from "@molecules/imageTitle"
import Text from "@atoms/text"

const MenuImages = ({images, name}) => {

    let imageData = images[0]
    let nameData = name[0]

    return (
        <>
            <MenuImagesDiv>
                <Text text="메뉴판"/>
                <MenuWholeImagesDiv>
                    <ImagesDiv>
                        <ImageTitle text={nameData['image1']} textClassName="menuTitle" src={imageData['image1']} alt="images/storeImage.svg" />
                        <ImageTitle text={nameData['image2']} textClassName="menuTitle" src={imageData['image2']} alt="images/storeImage.svg" />
                        <ImageTitle text={nameData['image3']} textClassName="menuTitle" src={imageData['image3']} alt="images/storeImage.svg" />
                    </ImagesDiv>
                    <ImagesDiv>
                        <ImageTitle text={nameData['image1']} textClassName="menuTitle" src={imageData['image1']} alt="images/storeImage.svg" />
                        <ImageTitle text={nameData['image2']} textClassName="menuTitle" src={imageData['image2']} alt="images/storeImage.svg" />
                        <ImageTitle text={nameData['image3']} textClassName="menuTitle" src={imageData['image3']} alt="images/storeImage.svg" />
                    </ImagesDiv> 
                    <ImagesDiv>
                        <ImageTitle text={nameData['image1']} textClassName="menuTitle" src={imageData['image1']} alt="images/storeImage.svg" />
                        <ImageTitle text={nameData['image2']} textClassName="menuTitle" src={imageData['image2']} alt="images/storeImage.svg" />
                        <ImageTitle text={nameData['image3']} textClassName="menuTitle" src={imageData['image3']} alt="images/storeImage.svg" />
                    </ImagesDiv>   
                </MenuWholeImagesDiv>
            </MenuImagesDiv>
        </>
    );
};

export default MenuImages;