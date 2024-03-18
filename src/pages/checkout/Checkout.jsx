import {useContext, useState} from 'react';
import Header from "../../components/global/Header.jsx";
import {CartItems} from "../../App.jsx";
//import {Logging} from '../../App.jsx';

import kwaliteit from "../../assets/images/kwaliteit.png";
import arbo from "../../assets/images/arbo.png";
import "./Checkout.css"


// eslint-disable-next-line react/prop-types
function Checkout() {

    const cartItems = useContext(CartItems);
    //const logging = useContext(Logging);

    const handleCancel = (product) => {
        cartItems.setCartItemCount(cartItems.getCartItemCount - 1);
        product(0);
    }
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     address: ''
    // });
    //
    // const handleChange = e => {
    //     const {name, value} = e.target;
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };
    //
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     // Hier kun je verdere verwerkingslogica toevoegen, zoals het verzenden van de gegevens naar de backend
    //     console.log('Form data submitted:', formData);
    // };

    return (
        <>
            <Header setClass="global checkout"/>
            <main className="outer-container">
                <section className="inner-container checkout_products">
                    <block>
                    <h3>Winkelmand</h3>
                    {cartItems.productKwaliteit === 1 && (
                        <>
                            <article>
                                <div className="cancel" onClick={() => handleCancel(cartItems.setProductKwaliteit)}>X</div>
                                <img src={kwaliteit} alt="image of a person in a factory"/>
                                <div className="block">
                                    <h4>Basistraining Kwaliteit</h4>
                                    <p>25,-</p>
                                </div>
                            </article>
                        </>
                    )}
                    {cartItems.productArbo === 1 && (
                        <>
                            <article>
                                <div className="cancel" onClick={() => handleCancel(cartItems.setProductArbo)}>X</div>
                                <img src={arbo} alt="image of a person in a factory"/>
                                <div className="block">
                                    <h4>Basistraining Arbo</h4>
                                    <p>25,-</p>
                                </div>
                            </article>
                        </>
                    )}
                    </block>
                    <block>
                        <h3>Overzicht</h3>
                        <article className="amount">
                           <div>Artikelen({cartItems.getCartItemCount})</div>
                            <div>
                                {cartItems.getCartItemCount == 2 && '€50,00'}
                                {cartItems.getCartItemCount == 1 && '€25,00'}
                                <button className="btn btn-primary">Afrekenen</button>
                            </div>


                        </article>
                    </block>

                </section>
                {/*<div>*/}
                {/*    <h2>Afrekenen</h2>*/}
                {/*    <form onSubmit={handleSubmit}>*/}
                {/*        <div>*/}
                {/*            <label htmlFor="name">Naam:</label>*/}
                {/*            <input*/}
                {/*                type="text"*/}
                {/*                id="name"*/}
                {/*                name="name"*/}
                {/*                value={formData.name}*/}
                {/*                onChange={handleChange}*/}
                {/*                required*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <label htmlFor="email">E-mail:</label>*/}
                {/*            <input*/}
                {/*                type="email"*/}
                {/*                id="email"*/}
                {/*                name="email"*/}
                {/*                value={formData.email}*/}
                {/*                onChange={handleChange}*/}
                {/*                required*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <label htmlFor="address">Adres:</label>*/}
                {/*            <textarea*/}
                {/*                id="address"*/}
                {/*                name="address"*/}
                {/*                value={formData.address}*/}
                {/*                onChange={handleChange}*/}
                {/*                required*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <button type="submit">Verzenden</button>*/}
                {/*    </form>*/}
                {/*</div>*/}

            </main>

        </>
    );
}

export default Checkout;