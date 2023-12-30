import { StyledText } from './style';

const Text = ({ className, text, status, onClick, state }) => {

    return (
        <StyledText className={className} status={status} onClick={onClick} state={state}>{text}</StyledText>
    );
};

export default Text;