import React, { useEffect } from "react";
import { useProductContext } from "../../contexts/ProductsContext";
import style from "./Blog.module.scss";

function Blog() {
  const { getData, products } = useProductContext();
  useEffect(() => {
    getData();
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
                <a href="#">Buy Now</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Blog;
