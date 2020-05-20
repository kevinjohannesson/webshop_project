import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProduct } from "../store/product/selectors";
import styled from "styled-components";
import AddToCartButton from "../components/AddToCartButton";

const TagEl = styled.div`
  color: white;
  background-color: black;
  padding: 0.5rem;
  margin: 0.25rem;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TagBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const DetailsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 5rem;
  margin-right: 5rem;
`;

const DetailBox = styled.div`
  position: relative;
`;

export default function ProductDetails() {
  const { id } = useParams();

  const product = useSelector(selectProduct(parseInt(id)));

  return (
    <div>
      <DetailsBox>
        <DetailBox>
          <img src={product.img} alt="air" height="250" />
          <br />
          <h3>Price €: {product.price}</h3>
          <AddToCartButton />
        </DetailBox>
        <DetailBox>
          <h2>{product.name}</h2>
          <TagBox>
            {product.tags.map((tag, i) => (
              <TagEl key={i}>{tag}</TagEl>
            ))}
          </TagBox>
          <br />
          <div>{product.description}</div>
        </DetailBox>
      </DetailsBox>
    </div>
  );
}
