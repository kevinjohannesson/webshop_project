import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectAllTags } from '../store/product/selectors'
import Tag from './Tag'

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

  const allTags = useSelector(selectAllTags);
  // console.log(allTags);
  const sortHandler = ( event ) => {
    console.log('sorting method changed')
  }

  return (
    <FilterBox>
      <Filter>filter by Tag
        { allTags.map( (tag, i) => <Tag key={i} text={tag}/> ) }
      </Filter>
      <Sort>sort by: 
        <select onChange={sortHandler}>
          <option value="none">None</option>
          <option value="price">Price</option>
          <option value="popularity">Popularity</option>
        </select>
      </Sort>
    </FilterBox>
  )
}
