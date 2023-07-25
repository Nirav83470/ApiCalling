import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';


const Home = () => {


  const [data, setdata] = useState([]);


  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        // handle success
        console.log(response);
        setdata(response.data.products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);




  return (
    <>
      <div className="container">

          
  

        <div className="row">
          {data.map((items) => {
            return (
              <>
                <div className="col-6 box_eding mt-5">
                  <div className="img_mobiles">
                    <img src={items.thumbnail}></img>
                  </div>
                  <div>
                    <h3><Link to={`/${items.id}`}>{items.title}</Link></h3>
                    <h5>Stock : {items.stock}</h5>
                    <h5>Price : {items.price}</h5>
                    <h5>DiscountPercentage : {items.discountPercentage}</h5>
                    <h5>Rating : {items.rating}</h5>
                    <h5>Brand : {items.brand}</h5>
                    <h5>Category : {items.category}</h5>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
