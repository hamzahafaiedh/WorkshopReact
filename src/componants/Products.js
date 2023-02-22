import { Component } from "react";
import Product from "./Product";
import products from "../products.json"
import { Alert } from "react-bootstrap";

class Products extends Component{
    constructor(props){
        super(props) }
        state={
            v:false,
            x:false
        }
        
        decQuantity=(product)=>{
            product.quantity-- ;
            this.setState({v:true})
            setTimeout(()=>{ 
                this.setState({ 
                    v:false
              })
              },2000)
          }

          componentDidMount = () => {
            this.setState({
              x: true,
            });
            setTimeout(() => {
              this.setState({
                x: false,
              });
            }, 3000);
          };


    render(){
        return (<>
        {
            this.state.x && (
                <Alert variant="success">
                    welcome to our shop
                </Alert>
            )
        }
        
        
        {
        
        products.map((e)=>{
        return(<><Product product={e} parentBuy={this.decQuantity}></Product>
        {
            this.state.v && (
                <Alert variant="primary">
                    you bought an item
                </Alert>
            )
        }
        </>
        )})

    }


  
        </>    
        )
    }
}
export default Products;