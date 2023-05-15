import styled from 'styled-components';

const StyledImage = styled.img`
  &.imageLayoutImage {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &.imageLayoutMiddleImage {
    width: 100%;
    height: 50%;
    object-fit: contain;
  }
`

export { StyledImage };