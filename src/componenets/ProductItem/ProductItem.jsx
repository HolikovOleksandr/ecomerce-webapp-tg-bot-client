import Button from "../Button/Button";
import React from "react";
import "./ProductItem.css";

const ProductItem = ({ product, className, onAdd }) => {
  const onAddHandler = () => onAdd(product);

  return (
    <div>
      <div className={"prodcut " + className} />
      <div className={"title"}>{product.title}</div>
      <div className={"description"}>{product.description}</div>
      <div className={"price"}>
        <span>
          Price: <b>prodcut.price</b>
        </span>
      </div>
      <Button className={"add-btn"} onClic={onAddHandler}>
        To Basket
      </Button>
    </div>
  );
};

export default ProductItem;
