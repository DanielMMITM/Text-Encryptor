import { Button } from "../Components/Button/Button";
import { CardRight } from "../Components/Card/CardRight";
import { CardLeft } from "../Components/Card/CardLeft";
import { NavBar } from "../Components/NavBar/NavBar";
import { Footer } from "../Components/Footer/Footer";
import "../css/Home.css";
import claveImg from "../img/claveImg.png";
import columnImg from "../img/columnImg.png";
import comingSoonImg from "../img/comingSoonImg.jpg";

export function Home() {
  return (
    <>
      <NavBar></NavBar>
      <header className="header">
        <div className="mainHeader">
          <h1 className="mainTitle">
            Use one of our algorithms to encrypt your text
          </h1>
        </div>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </header>
      <div className="body">
        <section className="CardsSection" id="Algorithms">
          <CardRight
            img={claveImg}
            title="Key Transposed Matrix"
            text="The key transposed matrix encryption algorithm involves arranging plaintext characters into a matrix based on a chosen key. This key determines the matrix dimensions and character rearrangement. After encryption, the ciphertext is formed by reading the rearranged matrix. Decryption reverses this process using the inverse key. Effective key management is crucial for both parties. While it adds complexity, security depends on key strength and secrecy, making it vulnerable to cryptanalysis if the key is short or if plaintext patterns are detectable."
            button={<Button text="Try it" route="/Encrypt"></Button>}
          ></CardRight>
          <CardLeft
            img={columnImg}
            title="Column Transposed Matrix"
            text="In a columnar transposition, the message is written out in rows of a fixed length, and then read out again column by column, and the columns are chosen in some scrambled order. Both the width of the rows and the permutation of the columns are usually defined by a keyword."
            button={<Button text="Try it" route="/Encrypt"></Button>}
          ></CardLeft>
          <div id="ComingSoon">
            <CardRight
              img={comingSoonImg}
              title="TBD"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              button={<span>Coming soon...</span>}
            ></CardRight>
            <CardLeft
              img={comingSoonImg}
              title="TBD"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              button={<span>Coming soon...</span>}
            ></CardLeft>
          </div>
        </section>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default Home;
