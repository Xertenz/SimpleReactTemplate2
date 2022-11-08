import React, { useState } from "react";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import "./featuredproducts.css";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([
    {
      id: 1,
      img_url:
        "https://www.einerd.com.br/wp-content/uploads/2017/10/Naruto_Uzumaki-890x466.jpg.webp",
      category: "category",
      title: "Modern Black Blouse",
      rating: 2,
      price: "$35.5",
    },
    {
      id: 2,
      img_url:
        "https://i.pinimg.com/736x/2e/f7/96/2ef7960089f0a28024d2486c291c8c9d.jpg",
      category: "category",
      title: "Modern Black Blouse",
      rating: 2,
      price: "$35.5",
    },
    {
      id: 3,
      img_url:
        "https://calibbr.com/wp-content/uploads/2022/08/Our-Top-15-Strongest-Characters-In-Naruto.jpeg",
      category: "category",
      title: "Modern Black Blouse",
      rating: 4,
      price: "$35.5",
    },
    {
      id: 4,
      img_url:
        "https://i.pinimg.com/736x/0b/c0/f6/0bc0f67ca38acd76e1d5af484523b347.jpg",
      category: "category",
      title: "Modern Black Blouse",
      rating: 4,
      price: "$35.5",
    },
    {
      id: 5,
      img_url:
        "https://staticg.sportskeeda.com/editor/2021/12/b9890-16406246416967-1920.jpg",
      category: "category",
      title: "Modern Black Blouse",
      rating: 5,
      price: "$35.5",
    },
    {
      id: 6,
      img_url:
        "https://i.pinimg.com/736x/4e/2f/d0/4e2fd03bcc5a1d4c132a202a3b6ac3cc.jpg",
      category: "category",
      title: "Modern Black Blouse",
      rating: 3,
      price: "$35.5",
    },
    {
      id: 7,
      img_url:
        "https://cdn.myanimelist.net/s/common/uploaded_files/1445863540-5fa89eb58047b43d165397ff94a11248.jpeg",
      category: "category",
      title: "Modern Black Blouse",
      rating: 5,
      price: "$35.5",
    },
    {
      id: 8,
      img_url:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13295.954980741615!2d18.016129467725225!3d59.34346922273931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d86c5590a35%3A0xac5dd727a529fe56!2sEC%20Utbildning!5e0!3m2!1ssv!2sse!4v1667058793937!5m2!1ssv!2sse",
      category: "category",
      title: "Modern Black Blouse",
      rating: 5,
      price: "$35.5",
    },
  ]);
  return (
    <section className="featured-products">
      <div className="container">
        <h3 className="title text-center mb-4">Featured Products</h3>
        <div className="row">
          {featuredProducts.map((product) => (
            <FeaturedProduct item={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
