import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { isFilterActive } from '../store/app/selector';

const TagEl = styled.button`
color: black;
background-color: ${props => props.theme.main};
padding: 0.5rem;
margin: 0.25rem;
border-radius: 0.5rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

TagEl.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}
// Define what props.theme will look like
const active = {
  main: "mediumseagreen"
};

const inactive = {
  main: "gold"
};

const standard = {
  main: "orangered"
};


export default function Tag(props) {

  const isActive = useSelector(isFilterActive(props.text))
  return (
    <ThemeProvider theme={props.standard ? standard : isActive ? active : inactive }>
      <TagEl onClick={ () => props.clickHandler(props.text)}>
          {props.text}
      </TagEl>
    </ThemeProvider>
  )
}
