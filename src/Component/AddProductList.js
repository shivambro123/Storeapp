import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, editData } from "../redux/Action";
const AddProduct = () => {
    const navigate = useNavigate();

    // const [data,setData] = useState({})

    const dispatch = useDispatch()
  return (
    <div>
      <Container>
        <Row> 
          <Col md={4} class="mx-auto">
          <h1>Add Product</h1>

            <Card className="my-5 p-4">
              <Formik
                initialValues={{ title:"", price:0, description:"", category : "" , image: null}}
                enableReinitialize
              
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                 dispatch(addProduct(values))
                 setSubmitting(false)
                 navigate('/')
                
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      onChange={handleChange}
                      placeholder="title"

                      onBlur={handleBlur}
                      value={values.title}
                    />
                    {errors.title && touched.title && errors.title}<br/>
                    <input
                    type="text"
                    name="price"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                    placeholder="price"
                  />
                  {errors.price && touched.price && errors.price}<br/>   
                  <textarea
                  name="description"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  placeholder="description"
                  rows="10"
                ></textarea>
                {errors.description && touched.description && errors.description}<br/>
                    <input
                      type="text"
                      name="category"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.category}
                      placeholder="category"
                    />
                    {errors.category && touched.category && errors.category}<br/>
                    <input 
                    type="file"
                    name="image"
                    className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.image}
                      accept="image/png, image/gif, image/jpeg"
                      placeholder="image"
                    />
                  
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                      Submit
                    </button>
                  </form>
                )}
              </Formik>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddProduct;
