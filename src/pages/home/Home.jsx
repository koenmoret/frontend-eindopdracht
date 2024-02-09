import Header from "../../components/global/Header.jsx";
import "./Home.css"

// eslint-disable-next-line react/prop-types
function Home({setCart}) {
      return (
          <>
              <Header setCart={setCart} setClass="home"/>

              {/*<main className="outer-container">*/}
              {/*    <div className="header--background_bottom"></div>*/}
              {/*</main>*/}
          </>
      );
}

export default Home;