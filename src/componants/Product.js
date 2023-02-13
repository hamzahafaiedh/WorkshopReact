import Card from 'react-bootstrap/Card';
import { Component } from 'react';
import { Alert } from 'react-bootstrap';

class Product extends Component{
    constructor(props){
        super(props) }
        state={like:0,quant:this.props.product.quantity,variant:null,msg:""}
    incLike=()=>{
      this.setState({like:this.state.like+1});
    }
    decQuantity=()=>{
      if (this.state.quant>0){
      this.setState({quant:this.state.quant-1})
      this.setState({variant:'success'});
      this.setState({msg:"You bought an item"})
      setTimeout(() => {
        this.setState({variant:null});
        this.setState({msg:""})
      }, 2000);
      }
    }
    render(){
        return (<>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={"../assets/images/" +this.props.product.img} />
              <Card.Body>
                <Card.Title>{this.props.product.name}</Card.Title>
                <Card.Text>
                  Price: {this.props.product.price} dt
                </Card.Text>
                <Card.Text>
                  Quantity: {this.state.quant}
                </Card.Text>
                <Card.Text>
                  Likes: {this.state.like}
                </Card.Text>
                <Card.Text>
                <button onClick={this.incLike}>Like</button>
                <button onClick={this.decQuantity} disabled={this.state.quant==0}>buy</button>
                </Card.Text>
              </Card.Body>
            </Card>
            <Alert variant={this.state.variant}>
              {this.state.msg}        
              </Alert>
            </>

          );
    }
}
export default Product;