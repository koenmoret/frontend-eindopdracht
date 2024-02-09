import {Link} from "react-router-dom";
function NotFound() {
    return (
        <>
            {/*<Header />*/}
            <main>
            <h2>Oops... Pagina niet gevonden</h2>
                <p>Breng mij terug naar de <Link to="/">start pagina</Link>.</p>
            </main>
        </>
    );
}

export default NotFound;