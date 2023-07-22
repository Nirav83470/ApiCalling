import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
const Subproduct = () => {

    const [ data, setdata ] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios
        .get(`https://dummyjson.com/products/${id}`)
        .then(function (data) {
          // handle success
          setdata(data.data);
        })
    }, [])

    return(
        <>
               <div className="container d-flex mt-5">
                        <div className="img_11">
                             <img src={data.thumbnail}></img>
                        </div>
                        <div className="p-5">
                                    <h2>{data.title}</h2>
                                    <h5>Stock : {data.stock}</h5>
                                    <h5>Price : {data.price}</h5>
                                    <h5>DiscountPercentage : {data.discountPercentage}</h5>
                                    <h5>Rating : {data.rating}</h5>
                                    <h5>Brand : {data.brand}</h5>
                                    <h5>Category : {data.category}</h5>
                        </div>
               </div>

        </>
    )
}
export default Subproduct;