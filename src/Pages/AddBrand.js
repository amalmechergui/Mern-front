import React, { useState } from "react";
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { createCar } from "../Redux/carSlice";
import { BsPlus } from 'react-icons/bs';

 
 
 const AddBrand = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    Brand: "",
    Model: "",
    Features: "",
    Color: "",
    ImgUrl: "",
    Price:"",
   
    
    
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const AddHandler = (e) => {
    e.preventDefault();
    dispatch(createCar(formData));
    handleClose();
  };
  const { Brand, Model, Features, Color, ImgUrl ,Price } = formData;
   return (
    
     <div>
<Button className="add" onClick={handleShow} variant="primary">
        <BsPlus /> Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={AddHandler}>
            <Form.Group className="mb-3" >
              <Form.Label>Brand Title</Form.Label>
              <Form.Control
                name="Brand"
                type="text"
                placeholder="Enter brand of car "
                value={Brand}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Model</Form.Label>
              <Form.Control
                name="Model"
                type="text"
                placeholder="Enter the model"
                value={Model}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Features</Form.Label>
              <Form.Control
                name="Features"
                type="text"
                placeholder="Enter your Features"
                value={Features}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Color</Form.Label>
              <Form.Control
                name="Color"
                type="text"
                placeholder="Enter the color"
                value={Color}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>ImageUrl</Form.Label>
              <Form.Control
                name="ImgUrl"
                type="text"
                placeholder="Enter your ImageUrl"
                value={ImgUrl}
                onChange={handleChange}
              />  
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="Price"
                type="text"
                placeholder="Enter your Price"
                value={Price}
                onChange={handleChange}
              />  
            </Form.Group>
           
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Confirm
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    
     </div>
   )
 }
 
 export default AddBrand;