import {useContext} from 'react';
import Header from "../../components/global/Header.jsx";
import {CartItems} from "../../App.jsx";
//import {Logging} from '../../App.jsx';
//import StripeCheckout from 'react-stripe-checkout';


import kwaliteit from "../../assets/images/kwaliteit.png";
import arbo from "../../assets/images/arbo.png";
import "./Checkout.css";
import axios from "axios";
//import axios from "axios";

//import createMollieClient from '@mollie/api-client';


// eslint-disable-next-line react/prop-types
function Checkout() {

    const cartItems = useContext(CartItems);

    //const [payment, setPayment] = useState([]);

    const handleCancel = (product) => {
        cartItems.setCartItemCount(cartItems.getCartItemCount - 1);
        product(0);
    }

    async function handlePayment() {

        try {
            const response = await axios.post('https://api.mollie.com/v2/payments');
            console.log(response.data);
            //setPayment(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    // const mollieClient = createMollieClient({ apiKey: 'test_qcSmFfzK8pjJTGFKcrJb7ucrPVGCp9' });
    //
    // console.log(mollieClient);

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
                                    <div className="cancel"
                                         onClick={() => handleCancel(cartItems.setProductKwaliteit)}>X
                                    </div>
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
                                    <div className="cancel" onClick={() => handleCancel(cartItems.setProductArbo)}>X
                                    </div>
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
                                {cartItems.getCartItemCount === 2 && '€50,00'}
                                {cartItems.getCartItemCount === 1 && '€25,00'}
                                <button className="btn btn-primary" onClick={handlePayment}>
                                    Afrekenen
                                </button>
                            </div>


                        </article>
                    </block>

                </section>
                {/*<div>*/}
                {/*    <h1>Checkout Page</h1>*/}
                {/*    <div>*/}
                {/*        <h2>Payment Method</h2>*/}
                {/*        <select value={paymentMethod} onChange={handlePaymentMethodChange}>*/}
                {/*            <option value="">Select Payment Method</option>*/}
                {/*            <option value="credit_card">Credit Card</option>*/}
                {/*            /!* Add more payment methods as needed *!/*/}
                {/*        </select>*/}
                {/*    </div>*/}
                {/*    {paymentMethod === 'credit_card' && (*/}
                {/*        <div>*/}
                {/*            <h2>Credit Card Details</h2>*/}
                {/*            <MollieElementsProvider mollie={mollie}>*/}
                {/*                <form onSubmit={handlePayment}>*/}
                {/*                    <CardElement/>*/}
                {/*                    <button type="submit" disabled={loading}>Pay</button>*/}
                {/*                </form>*/}
                {/*            </MollieElementsProvider>*/}
                {/*        </div>*/}
                {/*    )}*/}
                {/*    {error && <p>{error}</p>}*/}
                {/*</div>*/}
            </main>

        </>
    );
}

export default Checkout;