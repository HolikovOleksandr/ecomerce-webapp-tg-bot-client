import React, { useState, useCallback, useEffect } from "react";
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => (acc += item.price), 0);
};

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([]);
  const { tg, queryId } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId,
    };

    fetch("http://localhost:3000", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
  }, [addedItems, queryId]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);

    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [tg, onSendData]);

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];

    alreadyAdded
      ? (newItems = addedItems.filter((i) => i.id !== product.id))
      : (newItems = [...addedItems, product]);

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Buy: ${getTotalPrice(newItems)}`,
      });
    }
  };

  return (
    <div className={"list"}>
      {products.map((item) => (
        <ProductItem product={item} onAdd={onAdd} className={"item"} />
      ))}
    </div>
  );
};

export default ProductList;

const products = [
  {
    id: 1,
    title: "Product One",
    img: "client/public/product_img.jpg",
    price: 120,
    description: "Some description about Product One",
  },
  {
    id: 2,
    title: "Product Two",
    img: "client/public/product_img.jpg",
    price: 220,
    description: "Some description about Product Two",
  },
  {
    id: 3,
    title: "Product Three",
    img: "client/public/product_img.jpg",
    price: 320,
    description: "Some description about Product Three",
  },
  {
    id: 4,
    title: "Product Four",
    img: "client/public/product_img.jpg",
    price: 420,
    description: "Some description about Product Four",
  },
  {
    id: 5,
    title: "Product Five",
    img: "client/public/product_img.jpg",
    price: 520,
    description: "Some description about Product Five",
  },
  {
    id: 6,
    title: "Product Six",
    img: "client/public/product_img.jpg",
    price: 620,
    description: "Some description about Product Six",
  },
];
