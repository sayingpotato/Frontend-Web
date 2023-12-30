import styled from "styled-components";

const RegexComponent = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

const RegexView = styled.div`
    width: 12px;
    height: 12px;
    background-color: ${props => props.state ? '#28469C' : '#B8B8BA'};
    border-radius: 50%;
    margin-top: 3px;
`;

export {RegexComponent, RegexView}