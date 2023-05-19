import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editData } from "../redux/Action";
const EditProduct = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    const [data,setData] = useState({})

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/'+id)
        .then(
            res =>{
                setData(res.data)
            }
        )
    })
    const dispatch = useDispatch()
    // const data = useSelector(state => state.product.product)

  return (
    <div>
      <Container>
        <Row> 
          <Col md={4}>
            <Card className="my-5 p-4">
              <Formik
                initialValues={{ title:data.title, price: data.price, description:data.description , category : data.category}}
                enableReinitialize
              
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                 dispatch(editData(data.id,values))
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
                      onBlur={handleBlur}
                      value={values.title}
                      placeholder="title"
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

export default EditProduct;
