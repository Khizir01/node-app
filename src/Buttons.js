import React from 'react';

function Buttons(props) {
   

    function plus(){
        const x = props.counter + 1;
        props.setCounter(x);
    }

    function minus(){
        const x = props.counter - 1;
        props.setCounter(x);
    }

    function reset(){
        props.setCounter(0);
    }
    return (
        <div className ="buttons">
           <button onClick ={plus} className = "button1">увеличить</button>
           <button onClick ={minus} className = "button2">уменьшить</button>
           <button onClick ={reset} className = "button3">сбросить</button>
         </div>
    );
}

export default Buttons;