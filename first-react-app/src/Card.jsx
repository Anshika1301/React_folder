import React from 'react';

function Card(props)
{
    return(
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="random image"/>
                    <div className="card_info">
                    <p className="card_title">{props.title}</p>
                    <h2 className="card_series">{props.seriesname}</h2>
                    <a href={props.link} target="_blank"><button>Watch Now</button></a>
                    </div>
                </div>      
            </div>
        </>
    );
}

export default Card;