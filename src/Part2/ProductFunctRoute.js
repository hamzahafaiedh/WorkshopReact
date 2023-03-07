import Card from 'react-bootstrap/Card';
import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

function ProductFunctRoute(props){
    const [product,setProduct]=useState(props.product)
    const MaClasse=product.like>5 ? "bestProduct" :""


    const incLike=()=>{
        setProduct({...product,like:product.like+1})
    }


        return (<>
            <Card style={{ width: '18rem' }} className={MaClasse}>
              <Card.Img variant="top" src={"../assets/images/" +product.img} />
              <Card.Body>
                <Card.Title >
                  <Link to={`/products/${product.name}/${product.like}`}>
                  {product.name}
                  </Link>
                  </Card.Title>
                <Card.Text>
                  Price: {product.price} dt
                </Card.Text>
                <Card.Text>
                  Quantity: {product.quantity}
                </Card.Text>
                <Card.Text>
                  Likes: {product.like}
                </Card.Text>
                <Card.Text>
                <button onClick={incLike}>Like</button>
                <button 
                disabled={product.quantity===0}
                onClick={()=>props.buyFunction(product)}>buy</button> 
                </Card.Text>
              </Card.Body>
            </Card>
            </>

          );
    }
export default ProductFunctRoute;