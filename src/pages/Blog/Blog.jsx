import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../contexts/ProductsContext";
import style from "./Blog.module.scss";
import cart from "./cart.png";

function Blog() {
  const navigate = useNavigate();
  const {
    getData,
    products,
    deleteProduct,
    addToLiked,
    cartLength,
    getCartLength,
  } = useProductContext();
  useEffect(() => {
    getData();
    getCartLength();
  }, []);

  return (
    <div className={style.blog_content}>
      {products.map((obj) => {
        return (
          <div key={obj.id} className={style.container}>
            <div className={style.card}>
              <div className={style.imgBx}>
                <img src={obj.image} />
              </div>
              <div className={style.contentBx}>
                <h2>{obj.name}</h2>
                <div className={style.size}>
                  <h3>{obj.description}</h3>
                </div>
                <div className={style.color}>
                  <h3>Color :</h3>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <button onClick={() => deleteProduct(obj.id)}>Delete</button>
                <button onClick={() => addToLiked(obj)}>i like it</button>
              </div>
            </div>
          </div>
        );
      })}
      <span className={style.badge}>{cartLength}</span>
      <img
        onClick={() => {
          navigate("/pricing");
        }}
        src={cart}
        alt="cart"
        className={style.cart}
      />
    </div>
  );
}

export default Blog;
