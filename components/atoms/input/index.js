import { StyledInput } from './style';

const Input = ({ state, className, type, onChange, value, placeholder }) => {

    return (
        <StyledInput state={state} className={className} type={type} onChange={onChange} value={value} placeholder={placeholder} />
    );
};

export default Input;