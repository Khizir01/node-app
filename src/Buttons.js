import React from 'react';

function Buttons(props) {
    return (
        <div className ="buttons">
           <div className="button1"><span className="but-span">увеличить</span></div>
           <div className= "button2"><span className="but-span">уменьшить</span></div>
           <div className = "button3"><span className="but-span">сбросить</span></div>
         </div>
    );
}

export default Buttons;