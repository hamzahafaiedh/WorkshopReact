import { Component } from "react";
import Product from "./Product";
import products from "../products.json"

class Products extends Component{
    constructor(props){
        super(props) }
        state={}
    render(){
        return (<>{
        
        products.map((e)=>{
        return(<Product product={e}></Product>)})
    }
        </>    
        )
    }
}
export default Products;