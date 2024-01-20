import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartTotal,
  removeItem,
  updateQuantity,
} from "../../store/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const increaseQty = (cartProductId, currentQty) => {
    const newQty = currentQty + 1;
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const decreaseQty = (cartProductId, currentQty) => {
    const newQty = Math.max(currentQty - 1, 1); // Ensure quantity doesn't go below 1
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const dispatch = useDispatch();
  const {
    data: cartProducts,
    totalAmount,
    deliverCharge,
  } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [useSelector((state) => state.cart)]);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  const emptyCartMsg = (
    <h4 className="container text-center p-4">Your Cart is Empty</h4>
  );

  return (
    <>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Cart</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <Link sat to="/" className="breadcrumb-item">
            <a href="#">Home</a>
          </Link>
          <li className="breadcrumb-item active text-white">Cart</li>
        </ol>
      </div>
      {cartProducts.length === 0 ? (
        emptyCartMsg
      ) : (
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Products</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((cartProduct) => (
                    <tr key={cartProduct.id}>
                      <th scope="row">
                        <div className="d-flex align-items-center">
                          <img
                            src={cartProduct.product_img}
                            alt={cartProduct.product_img}
                            style={{ width: 100 }}
                          />
                        </div>
                      </th>
                      <td>
                        <p className="mb-0 mt-4">{cartProduct.product_name}</p>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">{cartProduct.price}</p>
                      </td>
                      <td>
                        <div
                          className="input-group quantity mt-4"
                          style={{ width: "100px" }}
                        >
                          <div className="input-group-btn">
                            <button
                              onClick={() =>
                                decreaseQty(
                                  cartProduct.id,
                                  cartProduct.quantity
                                )
                              }
                              className="btn btn-sm btn-minus rounded-circle bg-light border"
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                          </div>
                          <span className="form-control form-control-sm text-center border-0">
                            {cartProduct.quantity || 1}
                          </span>
                          <div className="input-group-btn">
                            <button
                              onClick={() =>
                                increaseQty(
                                  cartProduct.id,
                                  cartProduct.quantity
                                )
                              }
                              className="btn btn-sm btn-plus rounded-circle bg-light border"
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">{cartProduct.totalPrice} $</p>
                      </td>
                      <td>
                        <button
                          onClick={() => handleRemoveItem(cartProduct.id)}
                          className="btn btn-md rounded-circle bg-light border mt-4"
                        >
                          <i className="fa fa-times text-danger"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row g-4 justify-content-end">
              <div className="col-8"></div>
              <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                <div className="bg-light rounded">
                  <div className="p-4">
                    <h1 className="display-6 mb-4">
                      Cart <span className="fw-normal">Total</span>
                    </h1>
                    <div className="d-flex justify-content-between mb-4">
                      <h5 className="mb-0 me-4">Subtotal:</h5>
                      <p className="mb-0">${totalAmount}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-0 me-4">Shipping</h5>
                      <div>
                        <p className="mb-0">Flat rate: $ {deliverCharge}</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                    <h5 className="mb-0 ps-4 me-4">Total</h5>
                    <p className="mb-0 pe-4">$ {totalAmount + deliverCharge}</p>
                  </div>
                  <button
                    className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                    type="button"
                  >
                    Proceed Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
