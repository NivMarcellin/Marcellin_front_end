import React from 'react';
import Title from '../../component/Title';
import Footer from '../../component/Footer';
const Accueil = () => {
    return (
        <div>
            <div className="content"></div>
            <Title />
            <div className="choose">
            <button class="button is-link">Connexion</button>
            <button class="button is-link">Inscription</button>
            </div>
            <Footer />
        </div>
    );
};

export default Accueil;
