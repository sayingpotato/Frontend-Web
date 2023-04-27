import { StyledImage } from './style';

const Image = ({ src, className}) => {

    return (
        <StyledImage src={src} alt={src} className={className} />
    );
};

export default Image;