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
const productDetail = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function ProductDetails() {
  const { id } = useParams();
  console.log("id", id);
  const product = useSelector(selectProduct(parseInt(id)));
  console.log("product", product);
  return (
    <div>
      <div>
        {" "}
        <img src={product.img} alt="air" height="100" />
        <br />
        Price €: {product.price}
        <AddToCartButton />
        <h2>{product.name}</h2>
        <TagBox>
          {product.tags.map((tag, i) => (
            <TagEl key={i}>{tag}</TagEl>
          ))}
        </TagBox>
      </div>
      <br />
      <div>{product.description}</div>
    </div>
  );
}
