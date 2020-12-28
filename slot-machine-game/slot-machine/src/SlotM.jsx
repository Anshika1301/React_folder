import React from 'react';

const SlotM = (props)=>
{
    let {x,y,z} = props;

    if(x===y && y===z)
    {   
        return(
            <>
            <div className="inner-slot">
                <h2>{x} {y} {z} </h2>
                <h2>This is matching.</h2>
                <hr/>
            </div>
            </>
        );
    }
    else
    {
        return(
            <>
            <div className="inner-slot">
                <h2> {x} {y} {z} </h2>
                <h2>This is not matching.</h2>
                <hr/>
            </div>
            </>
        );
    }
}

export default SlotM;