import Header from "../../components/global/Header.jsx";
import "./NewsFeed.css"
import axios from "axios";
import {useEffect} from "react";

// eslint-disable-next-line react/prop-types
function newsFeed() {

    async function fetchNews() {

        const apiKey = "97c237fedab441e5919ed6cfa6aa5767"; //
        const query = 'ministerie van Volksgezondheid'; // Zoekterm voor arbo-inspecties

        const language = 'nl'; // Taalvoorkeur (Nederlands in dit geval)
        const pageSize = 10; // Aantal nieuwsberichten dat je wilt ophalen
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&language=${language}&pageSize=${pageSize}&apiKey=${apiKey}`;

        try {
            const response = await axios.get(apiUrl);
            return response.data.articles; // Retourneer de nieuwsartikelen
        } catch (error) {
            console.error('Error fetching arbo inspection news:', error);
            return []; // Retourneer een lege array bij fouten
        }


    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetchNews()
            .then(articles => {
                console.log('Arbo inspection news articles:', articles);
                // Doe iets met de opgehaalde nieuwsartikelen
            });
    }, []);

    return (
        <>
            <Header setClass="home" />

            {/*<main className="outer-container">*/}
            {/*    <div className="header--background_bottom"></div>*/}
            {/*</main>*/}
        </>
    );
}

export default newsFeed;