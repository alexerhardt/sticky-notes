import React from 'react';
import StickyNote from './StickyNote';
import shortid from 'shortid';
import styled from 'styled-components';

const StyledStickyBoard = styled.div`
  background-color: lightblue;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
`

const EmptyMessage = styled.h1`
  grid-column: 1 / 7;
`
  
const StickyBoard = (props) => {
  let toRender;

  if (props.notes.length > 0) {
    toRender = props.notes.map((note, i) => (
        <StickyNote 
          text={note} 
          index={i} 
          key={shortid.generate()}
          onMemoRemove={props.onMemoRemove}
        />
      ))
  }
  else {
    toRender = <EmptyMessage>There is nothing here. Add a note!</EmptyMessage>;
  }

  return (
    <StyledStickyBoard>
      {toRender}
    </StyledStickyBoard>
  )
}

export default StickyBoard;