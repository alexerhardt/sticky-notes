import React from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.div`
  width: 33%;
  margin: 0 auto;
  /* Clear fix for button float */
  &:after {
    content: "";
    clear: both;
    display: table;
  }
`

const InputArea = styled.textarea`
  width: 100%;
`

const SendButton = styled.button`
  background-color: coral;
  padding: 0.5rem;
  color: white;
  cursor: pointer;
  border: none;
  float: right;
`


const TextInput = (props) => {
  return (
    <StyledTextInput>
      <h3>What's on your mind?</h3>
      <div className="row">
        <InputArea onChange={props.onChange} value={props.value} />
      </div>
      <div className="row">
        <SendButton onClick={props.onClick}>Add Note</SendButton>
      </div>
    </StyledTextInput>
  );
};

export default TextInput;