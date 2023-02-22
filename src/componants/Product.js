import Card from 'react-bootstrap/Card';
import { Component } from 'react';

class Product extends Component{
    constructor(props){
        super(props) }
        state={
          like:0,
          quant:this.props.product.quantity,
          variant:null,
          message:"",
          product:this.props.product,
          MyClass:""
        }

    incLike=()=>{
      this.setState({like:this.state.like+1});
      if(this.state.like==5){
        this.setState({MyClass:"bestProduct"});}
    }

 
    
    render(){
        return (<>
            <Card style={{ width: '18rem' }} className={this.state.MyClass}>
              <Card.Img variant="top" src={"../assets/images/" +this.state.product.img} />
              <Card.Body>
                <Card.Title>{this.state.product.name}</Card.Title>
                <Card.Text>
                  Price: {this.state.product.price} dt
                </Card.Text>
                <Card.Text>
                  Quantity: {this.state.product.quantity}
                </Card.Text>
                <Card.Text>
                  Likes: {this.state.like}
                </Card.Text>
                <Card.Text>
                <button onClick={this.incLike}>Like</button>
                <button onClick={()=>{this.props.parentBuy(this.state.product)}} disabled={this.state.product.quantity===0}>buy</button>
                </Card.Text>
              </Card.Body>
            </Card>
            </>

          );
    }
}
export default Product;