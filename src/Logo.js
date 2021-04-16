import React from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import logo from "./logo.svg";

function Logo(props) {
    function test(){
       alert()
    }
    return (
        <div onClick={test}>
           <img src={logo} alt = "logotype"/>
        </div>
    );
}

export default Logo;