import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductFunct from "../componants/ProductFunct";
import products from "../products.json";

function ProductDetails() {

    const {name}= useParams()



    return ( 
        <>{
            products.map((p)=>{if (p.name==name){
                return(
                    <>
                        {/* <ProductFunct product={p}></ProductFunct> */}
                        <img src={"../assets/images/" +p.img}/>
                        <h1>{p.name}</h1>
                        <h3>Description</h3>
                        <p>{p.description}</p>
                        <h3>Price</h3>
                        <p>{p.price} dt</p>
                        <h3>Likes</h3>
                        <p>{p.like}</p>
                    </>
                )
            }
            })
        }
        </>
     );
}

export default ProductDetails;