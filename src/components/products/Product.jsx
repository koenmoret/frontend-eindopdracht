// eslint-disable-next-line react/prop-types
function Product({image, altText, title, text, addCart, setCart, count, setCount, disabled}) {
    console.log(disabled);
    return (
        <>
            <div className="product">
                <img src={image} alt={altText}/>
                <h4>{title}</h4>
                <p>{text}</p>
                <button disabled={disabled} type="button" className="btn btn-primary" onClick={()=> {addCart(setCart + 1); setCount(count + 1);} }>Aanschaffen 25,-</button>
            </div>
        </>
    );
}

export default Product;
