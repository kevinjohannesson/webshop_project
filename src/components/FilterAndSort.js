import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllTags } from '../store/product/selectors'
import Tag from './Tag'
import { changeFilter, changeSortingMethod } from '../store/product/actions';

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

background-color: skyblue;
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
  const dispatch = useDispatch();

  const allTags = useSelector(selectAllTags);
  // console.log(allTags);
  const sortHandler = ( event ) => {
    console.log('sorting method changed')
    console.log( event.target.value )
    const sortingMethod = event.target.value;
    dispatch(changeSortingMethod(sortingMethod));
  }

  const tagClickHandler = ( tag ) => {
    console.log('tag clicked:')
    console.log(tag);
    // todo: add action that changes the filter:
    dispatch(changeFilter(tag))
  }

  return (
    <FilterBox>
      <Filter>filter by Tag
        { allTags.map( (tag, i) => <Tag key={i} text={tag} clickHandler={tagClickHandler} theme="yellow" /> ) }
      </Filter>
      <Sort>sort by: 
        <select onChange={sortHandler}>
          <option value="none">None</option>
          <option value="price">Price</option>
          <option value="bought">Popularity</option>
        </select>
      </Sort>
    </FilterBox>
  )
}
