import { useState } from 'react';
import Header from "../../components/global/Header.jsx";
import "./Checkout.css"


// eslint-disable-next-line react/prop-types
function Checkout({setCart}) {

        const [formData, setFormData] = useState({
            name: '',
            email: '',
            address: ''
        });

        const handleChange = e => {
            const { name, value } = e.target;
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        };

        const handleSubmit = e => {
            e.preventDefault();
            // Hier kun je verdere verwerkingslogica toevoegen, zoals het verzenden van de gegevens naar de backend
            console.log('Form data submitted:', formData);
        };

    return (
        <>
            <Header setCart={setCart} setClass="global"/>

            <div>
                <h2>Afrekenen</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Naam:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Adres:</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Verzenden</button>
                </form>
            </div>

        </>
    );
}

export default Checkout;