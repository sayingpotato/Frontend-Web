import { StyledInput } from './style';

const Input = ({ className, type, onChange, value, placeholder }) => {

    return (
        <StyledInput className={className} type={type} onChange={onChange} value={value} placeholder={placeholder} />
    );
};

export default Input;