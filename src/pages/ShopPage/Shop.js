import React, { useState } from "react";
import { products } from "../../data/Data";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Shop() {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      qunatity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    navigate("/cart");
  };

  return (
    <>
      <div class="container-fluid page-header py-5">
        <h1 class="text-center text-white display-6">Shop</h1>
        <ol class="breadcrumb justify-content-center mb-0">
          <Link to="/" class="breadcrumb-item">
            <a href="#">Home</a>
          </Link>
          <li class="breadcrumb-item active text-white">Shop</li>
        </ol>
      </div>

      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <h1 className="mb-4">Fresh fruits shop</h1>
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                <div className="col-xl-3">
                  <div className="input-group w-100 mx-auto d-flex">
                    <input
                      type="search"
                      className="form-control p-3"
                      placeholder="keywords"
                      aria-describedby="search-icon-1"
                    />
                    <span id="search-icon-1" className="input-group-text p-3">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                </div>
                <div className="col-6"></div>
                <div className="col-xl-3">
                  <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                    <label for="fruits">Default Sorting:</label>
                    <select
                      id="fruits"
                      name="fruitlist"
                      className="border-0 form-select-sm bg-light me-3"
                      form="fruitform"
                    >
                      <option value="volvo">Nothing</option>
                      <option value="saab">Popularity</option>
                      <option value="opel">Organic</option>
                      <option value="audi">Fantastic</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-3">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4>Categories</h4>
                        <ul className="list-unstyled fruite-categorie">
                          <li>
                            <div className="d-flex justify-content-between fruite-name">
                              <a href="#">
                                <i className="fas fa-apple-alt me-2"></i>Apples
                              </a>
                              <span>(3)</span>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex justify-content-between fruite-name">
                              <a href="#">
                                <i className="fas fa-apple-alt me-2"></i>Oranges
                              </a>
                              <span>(5)</span>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex justify-content-between fruite-name">
                              <a href="#">
                                <i className="fas fa-apple-alt me-2"></i>
                                Strawbery
                              </a>
                              <span>(2)</span>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex justify-content-between fruite-name">
                              <a href="#">
                                <i className="fas fa-apple-alt me-2"></i>Banana
                              </a>
                              <span>(8)</span>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex justify-content-between fruite-name">
                              <a href="#">
                                <i className="fas fa-apple-alt me-2"></i>Pumpkin
                              </a>
                              <span>(5)</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4 className="mb-2">Price</h4>
                        <input
                          type="range"
                          className="form-range w-100"
                          id="rangeInput"
                          name="rangeInput"
                          min="0"
                          max="500"
                          value="0"
                          oninput="amount.value=rangeInput.value"
                        />
                        <output
                          id="amount"
                          name="amount"
                          min-velue="0"
                          max-value="500"
                          for="rangeInput"
                        >
                          0
                        </output>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row g-4 justify-content-center">
                    {products.map((item, index) => (
                      <div className="col-md-6 col-lg-6 col-xl-4" key={index}>
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src={item.product_img}
                              className="img-fluid w-100 rounded-top"
                              alt="{item.product_img}"
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            {item.category}
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>{item.product_name}</h4>
                            <p>{item.description}</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                ${item.price} / kg
                              </p>
                              <a
                                onClick={() => handleAddToCart(item)}
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
