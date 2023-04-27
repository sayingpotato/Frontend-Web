import { StyledText } from './style';

const Text = ({ className, text }) => {

    return (
        <StyledText className={className}>{text}</StyledText>
    );
};

export default Text;