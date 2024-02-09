import Header from "../../components/global/Header.jsx";
import Product from "../../components/products/Product.jsx";
import "./Products.css"
import kwaliteit from "../../assets/images/kwaliteit.png";
import arbo from "../../assets/images/arbo.png";

// eslint-disable-next-line react/prop-types
function Products({setCart, addCart, setKwaliteitCount, countKwaliteit, setArboCount, countArbo}) {

    return (
        <>
            <Header setCart={setCart} setClass="product"/>

            <main className="outer-container">
                <section className="inner-container products">
                    <article className="products">
                        <Product
                            image={kwaliteit}
                            altText="image of a person in a factory"
                            title="Basistraining Kwaliteit"
                            text="Deze training leert je alles over basisvoorwaarden voor het produceren van veilig voedsel. Daar heeft iedereen in het bedrijf invloed op, dus ook jij."
                            setCart={setCart}
                            addCart={addCart}
                            count={countKwaliteit}
                            setCount={setKwaliteitCount}
                            disabled={countKwaliteit !== 0 ? "disabled" : ""}
                        />
                        <Product
                            image={arbo}
                            altText="image of a person in a factory"
                            title="Basistraining Arbo"
                            text="Het is belangrijk dat je weet welke risico's je loopt op je werk en hoe je ongevallen kunt voorkomen. Daar leer je meer over in deze basistraining."
                            setCart={setCart}
                            addCart={addCart}
                            count={countArbo}
                            setCount={setArboCount}
                            disabled={countArbo !== 0 ? "disabled" : ""}
                        />
                    </article>
                </section>
            </main>
        </>
    );
}

export default Products;