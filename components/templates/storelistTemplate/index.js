import Title from "@molecules/title"
import ImageButton from "@molecules/imageButton"
import Store from "@organisms/store"

const StorelistTemplate = () => {
    return (
        <div>
            <Title text="내 주변 가게"/>
            <Store />
            <ImageButton className="mapImageButton" src="images/whiteMap.svg" alt="images/whiteMap.svg"/>
        </div>
    );
};

export default StorelistTemplate;