import products from "../products.json";
import ProductFunct from "./ProductFunct";
import React, { useEffect, useState } from 'react';
import { Alert } from "react-bootstrap";
import ProductFunctRoute from "../Part2/ProductFunctRoute";

function ProductsFunct(){
const [show,setShow]=useState(false);
const [visible,setVisible]=useState(false);


    useEffect(()=>{
        setVisible(true);
        console.log("hamza");
        setTimeout(()=>{
            setVisible(false)
        },3000)
    },[])


    const buy=(product)=>{
        product.quantity -- ;
        setShow(true);
        setTimeout(()=>{
            setShow(false)
        },3000)
    }




    return(<>
    {visible && (
          <Alert variant="success">
            <Alert.Heading>
              Hey, Welcome To Our Shop <strong> MyStore </strong>{" "}
            </Alert.Heading>
            <p>
              Thank you for choosing our store, we hope you enjoy your shopping
              experience!
            </p>
            <hr />
          </Alert>
        )}




        <div>
    {
    products.map((p)=>{
        return(<>
        <ProductFunctRoute product={p} buyFunction={buy}></ProductFunctRoute>
        {show && (
          <Alert  style={{ marginTop: "30px" }} variant="primary">
            You bought an Item 
          </Alert>
        )}
        </>
        )
    }
    )  
}
</div>


    </>)
    }
export default ProductsFunct;