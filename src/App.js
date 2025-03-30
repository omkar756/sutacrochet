import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { ads, products, carouselImages } from "./Products";
import "./App.css";
import Biography from "./Biography";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="natural-haven">
      {showWelcome && (
        <motion.div
          className="welcome-haven"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="welcome-text"
            initial={{ y: -50, scale: 0.9 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          >
            Welcome to SutaCrochet
          </motion.h1>
        </motion.div>
      )}

      {!showWelcome && (
        <div className="haven-content">
          <header className="fixed-header text-center my-4">
            <motion.h1
              className="haven-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              SutaCrochet
            </motion.h1>
          </header>

          <section className="carousel-haven">
            <Slider {...carouselSettings}>
              {carouselImages.map((item) => (
                <div key={item.id} className="carousel-item">
                  <img src={item.image} alt={item.caption} className="carousel-image" />
                  <h3>{item.caption}</h3>
                </div>
              ))}
            </Slider>
          </section>

          <section className="search-haven my-4">
            <motion.input
              type="text"
              className="search-input"
              placeholder="Search handmade treasures..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ borderColor: "#8b6b52" }}
              transition={{ duration: 0.3 }}
            />
          </section>

          <section className="product-haven">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleShowModal(product)}
              />
            ))}
          </section>

          <Biography />

          {showModal && selectedProduct && (
            <motion.div
              className="fabric-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={handleCloseModal}
            >
              <motion.div
                className="fabric-content"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-fabric" onClick={handleCloseModal}>
                  ✕
                </button>

                {selectedProduct.images.length === 1 ? (
                  <motion.img
                    src={selectedProduct.images[0]}
                    alt={selectedProduct.name}
                    className="fabric-image"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                ) : (
                  <Slider {...carouselSettings}>
                    {selectedProduct.images.map((img, idx) => (
                      <div key={idx}>
                        <motion.img
                          src={img}
                          alt={`${selectedProduct.name}-${idx}`}
                          className="fabric-image"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                    ))}
                  </Slider>
                )}

                <div className="fabric-details">
                  <h5>{selectedProduct.name}</h5>
                  <p>
                    <span className="original-price">₹{selectedProduct.price}</span>{" "}
                    <span className="discounted-price">
                      ₹{selectedProduct.price - selectedProduct.discount}
                    </span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}

const ProductCard = ({ product, onClick }) => (
  <motion.div
    className="haven-card"
    whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)" }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <img src={product.images[0]} alt={product.name} className="haven-image" />
    <div className="card-text-content">
      <div className="yarn-edge" />
      <h5>{product.name}</h5>
      <p>
        <span className="original-price">₹{product.price}</span>{" "}
        <span className="discounted-price">
          ₹{product.price - product.discount}
        </span>
      </p>
    </div>
  </motion.div>
);

export default App;