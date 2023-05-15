import { StyledButton } from './style';

const Button = ({ children, onClick, className, text }) => {

    return (
        <StyledButton onClick={onClick} className={className}>{children}{text}</StyledButton>
    );
};

export default Button;