import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCars } from "../Redux/carSlice";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, Form, Modal } from 'react-bootstrap';

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { mycars } = useSelector((state) => state.car);
  const car = mycars?.find((el) => el._id === id); // Use find instead of filter

  useEffect(() => {
    dispatch(getCars(id)); // Assuming getCarById fetches a single car by id
  }, [dispatch, id]);

  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container_detail">
    <div className="core">
      <div className="image-section">
        <section className="gallery-holder hide-in-mobile">
          <section className="gallery">
            <div className="image">
              {car && <img src={car.ImgUrl} alt={car.Brand} />}
            </div>
          </section>
        </section>
        <section className="mobile-gallery hide-in-desktop">
        </section>
      </div>
      <section className="text-section">
        <h1 className="pre">{car && car.Brand}</h1>
        <h1>{car && car.Model}</h1>
        <p className="desc">{car && car.Features}</p>
        <div className="price">
          <div className="main-tag">
            <p>{car && `${car.Price}`}</p>
            <p className='red'>-10%</p>
          </div>
        </div>
        <div className="buttons">
          <div className="amount">
            <button className="minus" style={{ color: 'orange' }} onClick={handleDecrement} disabled={quantity === 0}>
              <RemoveIcon />
            </button>
            <p>{quantity}</p>
            <button className="plus" style={{ color: 'orange' }} onClick={handleIncrement}>
              <AddIcon />
            </button>
          </div>
          


          <Button className="add-to-cart"  onClick={handleShow}>
          add to cart
      </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Buy Cars </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label> Phone Number </Form.Label>
              <Form.Control  type="number" rows={2}  placeholder="+216" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Payment</Form.Label>
              <Form.Control as="textarea" rows={1}  placeholder="XXXXXXXXXXXXXXXXXXX" />
              <select name="Payment" >
          <option value="Money">Money</option>
          <option value="Credit-Card">Credit-Card</option>
          <option value="PayPal">PayPal</option>
        </select>
            </Form.Group>

          </Form>
         

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
      </section>
    </div>
    </div>
  );
};

export default DetailsPage;
