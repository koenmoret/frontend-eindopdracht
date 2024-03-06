// eslint-disable-next-line react/prop-types
import {useContext} from "react";
import {CartItemCount} from "../../App.jsx";

// eslint-disable-next-line react/prop-types
function Product({image, altText, title, text, addCart, count, setCount, disabled}) {
    console.log(disabled);
    const cartItemCount = useContext(CartItemCount);

    return (
        <>
            <div className="product">
                <img src={image} alt={altText}/>
                <h4>{title}</h4>
                <p>{text}</p>
                <button disabled={disabled} type="button" className="btn btn-primary" onClick={()=> {addCart(cartItemCount + 1); setCount(count + 1);} }>Aanschaffen 25,-</button>
            </div>
        </>
    );
}

export default Product;
