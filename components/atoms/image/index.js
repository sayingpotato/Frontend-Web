import { StyledImage } from './style';

const Image = ({ src, alt, className, onClick, width, height }) => {

    return (
        <StyledImage src={src} alt={alt} className={className} onClick={onClick} width={width} height={height} />
    );
};

export default Image;