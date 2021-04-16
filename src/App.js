import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from "./Footer";
import Buttons from './Buttons';
import Copyrighte from './Copyrighte';
import FooterLogo from './FooterLogo';
import FooterMenu from "./FooterMenu";

function App(props) {
    return (
        <div>
            <Header />
            <MainContent />
            <Buttons />
            <Footer />
            <FooterLogo />
            <FooterMenu />
            <Copyrighte />
            
        </div>
    );
}

export default App;