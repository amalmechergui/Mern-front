import { useEffect } from "react";
import './App.css';
import HomePage from "./Pages/HomePage";
import { getCars } from "./Redux/carSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";


function App(){
 const dispatch = useDispatch();


  const { loading } = useSelector((state) => state.car);
  const {createdCar } = useSelector((state) => state.car);
  const { deletedCar } = useSelector((state) => state.car);
  const {updatedCar } = useSelector((state) => state.car);
  const { mycars } = useSelector((state) => state.car);

  useEffect(() => {
   dispatch(getCars());
 }, [dispatch, createdCar, deletedCar, updatedCar]);

 return (
 <div className="App"> 
 {loading ? (
        <div>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
 ) : (
    <>
      <HomePage mycars={mycars} />
    </>
  
 )}

</div>
 );
}
export default App;

