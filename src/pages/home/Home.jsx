import Header from "../../components/global/Header.jsx";
import "./Home.css"

// eslint-disable-next-line react/prop-types
function Home({setLogged}) {
      return (
          <>
              <Header setClass="home" setLogged={setLogged}/>

              {/*<main className="outer-container">*/}
              {/*    <div className="header--background_bottom"></div>*/}
              {/*</main>*/}
          </>
      );
}

export default Home;