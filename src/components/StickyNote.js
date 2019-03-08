import React from 'react';
import styled from 'styled-components';

const StyledStickyNote = styled.div`
  background-color: lightgoldenrodyellow;
  min-height: 50px;
  position: relative;
  padding: 0.75rem;
  max-height: 250px;
  overflow-y: auto;
`
const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0.25rem;
  right: 0.5rem;
  &:after {
    display: inline-block;
    content: "\00d7";
  }
`

const StickyNote = (props) => {
  return (
    <StyledStickyNote>
      {props.text}
      <CloseButton onClick={() => props.onMemoRemove(props.index)} />
    </StyledStickyNote>
  )
}

export default StickyNote;
