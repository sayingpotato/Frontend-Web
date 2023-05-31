import React from 'react';

import { StyledPercentBlockDiv } from './style';
import InlineBlock from "@atoms/inlineBlock"
import ImageText from "@molecules/imageText"

const PercentBlock = ({ children }) => {
  return (
    <StyledPercentBlockDiv>
      {React.Children.map(children, child => (
        <InlineBlock className="outside">
          <InlineBlock className={`${child.props.inlineBlockClass}`}>
            <ImageText divClassName="basic" src={child.props.src} alt={child.props.alt} text={child.props.text} textClass={child.props.textClass}/>
          </InlineBlock>
        </InlineBlock>
      ))}
    </StyledPercentBlockDiv>
  );
};

export default PercentBlock;