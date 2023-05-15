import styled from 'styled-components';

const StyledButton = styled.button`

  &.mapImageButton {
    background-color : #28469C;
    position: absolute;
    bottom: ${(props) => (props.state === true ? '50%' : '25%')};
    border: 1px solid white;
    z-index: 2;
    border-radius: 50%;
    right: 3%;
    width: 50px;
    height: 50px;
    padding: 0px;
  }
`

export { StyledButton };