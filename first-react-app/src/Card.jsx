import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
                    <a href={props.link} target="_blank"><button className="btn btn-info btn-lg text-light">Watch Now</button></a>
                    </div>
                </div>      
            </div>
        </>
    );
}

export default Card;