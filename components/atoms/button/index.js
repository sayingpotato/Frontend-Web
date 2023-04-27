import { StyledButton } from './style';

const Button = ({ text, onClick, className }) => {

    return (
        <StyledButton onClick={onClick} className={className}>{text}</StyledButton>
    );
};

export default Button;