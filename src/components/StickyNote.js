import React from 'react';
import styled from 'styled-components';

const StyledStickyNote = styled.div`
  background-color: lightgoldenrodyellow;
  grid-column: 1;
  min-height: 50px;
`

const StickyNote = (props) => {
  return (
    <StyledStickyNote>
      {props.text}
      <button onClick={() => props.onMemoRemove(props.index)}>X</button>
    </StyledStickyNote>
  )
}

export default StickyNote;
