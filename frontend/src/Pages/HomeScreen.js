import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../Components/Product";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../actions/productActions";

const Homescreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  return (
    <>
      <h1>Latest products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Homescreen;
