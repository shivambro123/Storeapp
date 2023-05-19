import React, { useState, useEffect } from "react";
import axios from "axios";
// import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import SingleProduct from "./SingleProduct";
import { NavLink } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { deleteData, fetchData } from "../redux/Action";

const ProductList = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const data = useSelector((state) => state.product.product);
  console.log(data);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);

  // select

  const selectHandler = (e) => {
    setSelect(e.target.value);
  };
  //Search 
  let searchdata;
  searchdata = data.filter((val) => {
    return val.title.toLowerCase().includes(search.toLowerCase());
  });
 // Filter 
  if (select === "price") {
    searchdata = searchdata.sort((a, b) => a.price - b.price);
  } else if (select === "category") {
    searchdata = searchdata.sort((a, b) =>
      a.category.localeCompare(b.category)
    );
  }
  console.log(searchdata);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const deleteProduct = (id, index) => {
    dispatch(deleteData(id, index));
    dispatch(fetchData());
  };


  return (
    <>
      <div className="p-3">
      <label className="mx-2"><h6>Search Product - </h6></label>
      <input
          type="text"
          placeholder="search product"
          onChange={changeHandler}
          className="rounded"
        />
        <label className="mx-2"><h6>Filter By - </h6></label>
        <select onChange={selectHandler}>
          <option value="none">Select</option>
          <option value="price">Price</option>
          <option value="category">Category</option>
        </select>
      </div>
      <div className="p-2">
        <Table className="table" striped bordered hover variant="light" >
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {searchdata.map((val, ind) => {
              return (
                <tr>
                  <td>{ind + 1}</td>
                  <td>{val.title}</td>
                  <td>{val.price}</td>
                  <td>{val.description}</td>
                  <td>{val.category}</td>
                  <td>
                    {" "}
                    <div className="d-flex mx-1">
                      <SingleProduct id={val.id} />{" "}
                      <Button variant="outlined">
                        {" "}
                        <NavLink className="nav-link" to={`/edit/${val.id}`}>
                          Update
                        </NavLink>
                      </Button>{" "}
                      <Button
                        variant="outlined"
                        onClick={() => deleteProduct(val.id)}
                      >
                        Delete
                      </Button>
                    </div>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ProductList;
