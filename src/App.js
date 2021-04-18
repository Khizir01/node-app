import React, { useState } from 'react';
import Header from './Header';
import Number from './Number';
import Footer from "./Footer";
import Buttons from './Buttons';
import Copyrighte from './Copyrighte';
import FooterLogo from './FooterLogo';
import FooterMenu from "./FooterMenu";


function App(props) {
    
    const [counter, setCounter] = useState(0);
   
    return (
        <div className="App">
           
           
            <Header />
            <Number counter ={counter} />
            <Buttons counter ={counter} setCounter ={setCounter}/>
            <Footer />
            <FooterLogo />
            <FooterMenu />
            <Copyrighte />
            
        </div>
    );
}

export default App;