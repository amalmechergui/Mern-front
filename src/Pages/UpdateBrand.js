import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { updateCar } from "../Redux/carSlice";
import { MdSystemUpdateAlt ,  MdCancelPresentation} from "react-icons/md";


const UpdateBrand = () => {
 const { id } = useParams();
 const dispatch = useDispatch();
 const navigate = useNavigate();
  const { mycars } = useSelector((state) => state.car);

  const specificCar = mycars?.filter((el) => el._id === id);

  const [Brand, setBrand] = useState(specificCar[0].Brand);
  const [Model, setModel] = useState(specificCar[0].Model);
 const [Features, setFeatures] = useState(specificCar[0].Features);
  const [Color, setColor] = useState(specificCar[0].Color);
  const [ImgUrl, setImgUrl] = useState(specificCar[0].ImgUrl); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'Brand':
        setBrand(value);
        break;
      case 'Model':
        setModel(value);
        break;
      case 'Features':
        setFeatures(value);
        break;
      case 'Color':
        setColor(value);
        break;
      case 'ImgUrl':
        setImgUrl(value);
        break;
      default:
        break;
    }
  };
  const updateHandler = (e) => {
   e.preventDefault();
   dispatch(updateCar({ id, Brand,Model,Features,Color,ImgUrl }));
   navigate("/dashboard");
  };
  return (
<div className="container">
{specificCar?.map((el) => (
        <Form onSubmit={updateHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Brand </Form.Label>
            <Form.Control
              type="text"
              defaultValue={Brand}
              name="Brand"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>ModeL</Form.Label>
            <Form.Control
              type="text"
              defaultValue={Model}
              name="Model"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Features to update</Form.Label>
            <Form.Control
              type="text"
              defaultValue={Features}
              name="Features"
              onChange={handleChange}
            />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Color to update</Form.Label>
            <Form.Control
              type="text"
              defaultValue={Color}
              name="Color"
              onChange={handleChange}
            />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>ImgUrl to update</Form.Label>
            <Form.Control
              type="text"
              defaultValue={ImgUrl}
              name="ImgUrl"
              onChange={handleChange}
            />
          
          </Form.Group>

          
          <Button variant="success" type="submit"> update
          <MdSystemUpdateAlt />
          </Button>

          <Link to="/dashboard">
          <Button variant="danger">Cancel  <MdCancelPresentation /> </Button>
          </Link>
          </Form>
          
          ))}
     </div>
  );
};

export default UpdateBrand;
