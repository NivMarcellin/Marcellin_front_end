import React from "react";
import Title from "../../component/Title";
import Footer from "../../component/Footer";
const Accueil = () => {
  return (
    <div>
      <div className="content"></div>
      <div className="composent">
        <div className="childcomposent">
          <Title />
          <div className="choose">
            <button class="button">Connexion</button>
            <button class="button">Inscription</button>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Accueil;
