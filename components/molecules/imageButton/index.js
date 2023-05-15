import Button from "@atoms/button";
import Image from "@atoms/image";

const ImageButton = ({ className, src, alt, onClick }) => {
    return (
        <>
            <Button className={className} onClick={onClick}>
                <Image src={src} alt={alt} />
            </Button>
        </>
    );
};

export default ImageButton;