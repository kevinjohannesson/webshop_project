import React from "react";
import styled from "styled-components";
import AddToCartButton from "./AddToCartButton";
import Tag from "./Tag";
import { Link } from "react-router-dom";
const Card = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 10px 10px 8px #888888;

  padding: 1rem;

  margin: 1rem;
`;

const TagBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function ProductCard(props) {
  // console.log(props)
  return (
    <Card>
      <Link to={`/products/${props.ID}`}>
        <h3>{props.name}</h3>
      </Link>
      Price €: {props.price}
      <TagBox>
        {props.tags.map((tag, i) => (
          <Tag key={i} text={tag} />
        ))}
      </TagBox>
      <img src={props.img} alt="air" height="100" />
      <AddToCartButton />
    </Card>
  );
}
