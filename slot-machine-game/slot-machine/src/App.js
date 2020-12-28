import React from 'react';
import SlotM from './SlotM';
import Heading from './Topheading';

const App = ()=>
{
    return(
        <>
         <Heading/>
         <div className="slotmachine">
            <SlotM x="😄" y="😄" z="😄"/>
            <SlotM x="😄" y="😆" z="😄"/>
            <SlotM x="🍎" y="🍎" z="🍌"/>
            <SlotM x="🍋" y="🍋" z="🍋"/>
         </div>
        </>
    );
}

export default App;