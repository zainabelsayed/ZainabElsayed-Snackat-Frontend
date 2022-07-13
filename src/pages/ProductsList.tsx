import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import { ProductInterface } from '../interfaces/product';
import Product from "./Product";

export default function ProductsList() {
  const [products, setProducts] = useState(Array<ProductInterface>);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <div className=" pt-5 row g-4 justify-content-center">
            {products ? (
              products.map((product) => (
                <Product product={product} key={product.id} />
              ))
            ) : (
              <div className="mt-5 pt-5 d-flex justify-content-center align-items-center">
                <div
                  className="spinner-grow text-primary"
                  role="status"
                  style={{ width: "3rem", height: "3rem" }}
                ></div>
              </div>
            )}
          </div>
        </div>
        <div className="col-3 mt-5">
          <Cart />
        </div>
      </div>
    </div>
  );
}
