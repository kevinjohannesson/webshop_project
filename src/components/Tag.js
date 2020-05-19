import React from 'react';
import styled from 'styled-components';

const TagEl = styled.button`
color: white;
background-color: black;
padding: 0.5rem;
margin: 0.25rem;
border-radius: 0.5rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export default function Tag(props) {

  const clickHandler = event => {
    console.log( 'Hello' );
  }

  return (
    <TagEl onClick={clickHandler}>
        {props.text}
    </TagEl>
  )
}
