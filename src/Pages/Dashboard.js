import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { getCars } from "../Redux/carSlice";
import { deleteCar } from "../Redux/carSlice";
import { FaEdit } from "react-icons/fa";
import AddBrand from "../Pages/AddBrand";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const Dashboard = () => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteCar(id));
  };
  const { mycars } = useSelector((state) => state.car);
  const { createCar } = useSelector((state) => state.car);
  const { updatedCar } = useSelector((state) => state.car);
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch, createCar, updatedCar,deleteCar]);

  console.log(mycars);
  
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <AddBrand />
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="tableHeader">postedBy</TableCell>
              <TableCell className="tableHeader">Brand</TableCell>
              <TableCell className="tableHeader">Model</TableCell>
              <TableCell className="tableHeader">Image</TableCell>
              <TableCell className="tableHeader">Price</TableCell>
              <TableCell className="tableHeader">Color</TableCell>
              <TableCell className="tableHeader">Description</TableCell>
              <TableCell className="tableHeader">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mycars?.map((car) => (
              <TableRow key={car.id}>
                <TableCell>{car.postedBy}</TableCell>
                <TableCell>{car.Brand}</TableCell>
                <TableCell>{car.Model}</TableCell>
                <TableCell>
                  <img src={car.ImgUrl} alt={car.Brand} width="100" height="100" />
                </TableCell>
                <TableCell>{car.Price}</TableCell>
                <TableCell>{car.Color}</TableCell>
                <TableCell style={{ maxWidth: "300px", overflow: "hidden", textOverflow: "ellipsis" }}> {car.Features} </TableCell>
                <TableCell>
                  {userInfo?.role === "admin" && (
                    <>
                      <Button variant="contained" color="secondary" onClick={() => handleDelete(car._id)}>
                        <MdDeleteForever />
                      </Button>
                      <Button variant="contained" color="primary" component={Link} to={`/car/${car._id}`}>
                        <FaEdit />
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;

// OTHER METHODE
/* {userInfo?.role === "admin" || userInfo._id === car.postedBy._id? <> <Button variant="contained" color="secondary" onClick={() => handleDelete(car._id)}>
                    <MdDeleteForever />
                  </Button>
                  <Button variant="contained" color="primary" component={Link} to={`/car/${car._id}`}>
                    <FaEdit />
                  </Button> </> : ""} */