import React, { useState } from "react";
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";

const ProductList = () => {
  const [addedProducts, setAddedProducts] = useState([]);
  const { tg } = useTelegram();
  let newProducts = [];

  const getTotalPrice = (products = []) => {
    return products.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  };

  const onAdd = (product) => {
    const alreadyAdded = addedProducts.find((i) => i.id === product.id);

    if (alreadyAdded) {
      newProducts = addedProducts.filter((i) => i.id !== product.id);
    } else {
      newProducts = [...addedProducts, product];
    }

    setAddedProducts(newProducts);

    if (newProducts.lenght === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Buy: ${getTotalPrice(newProducts)}`,
      });
    }
  };

  return (
    <div className={"list"}>
      {products.map((i) => (
        <ProductItem product={i} onAdd={onAdd} className={"item"} />
      ))}
    </div>
  );
};

export default ProductList;

const products = [
  {
    id: 1,
    title: "Product One",
    price: 120,
    description: "Some description about Product One",
  },
  {
    id: 2,
    title: "Product Two",
    price: 220,
    description: "Some description about Product Two",
  },
  {
    id: 3,
    title: "Product Three",
    price: 320,
    description: "Some description about Product Three",
  },
  {
    id: 4,
    title: "Product Four",
    price: 420,
    description: "Some description about Product Four",
  },
  {
    id: 5,
    title: "Product Five",
    price: 520,
    description: "Some description about Product Five",
  },
  {
    id: 6,
    title: "Product Six",
    price: 620,
    description: "Some description about Product Six",
  },
];
