import React from 'react'
import styled from 'styled-components'

const FilterBox = styled.div`
display: flex;
flex-direction: row;
border: 1px solid black;
padding: 1rem;
margin: 1rem 0rem;
`

const Filter = styled.div`
display: flex;
flex-direction: row;
border: 1px solid black;
padding: 1rem;
margin: 0rem 1rem;

background-color: gold;
`

const Sort = styled.div`
display: flex;
flex-direction: row;
border: 1px solid black;
padding: 1rem;
margin: 0rem 1rem;

background-color: green;

`


export default function FilterAndSort() {
  return (
    <FilterBox>
      <Filter>filter by Tag</Filter>
      <Sort>sort by: something</Sort>
    </FilterBox>
  )
}
