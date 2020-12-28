import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import Sdata from './Sdata';
import './index.css';



ReactDom.render(
  <>
    <h1 className="heading">List of top 4 netflix series in 2020</h1>
    {Sdata.map((value)=>{
      return(
        <Card
        key={value.id}
        imgsrc={value.imgsrc}
        title={value.title}
        seriesname={value.seriesname}
        link={value.link}
        />
      );
    })}
  </>,
  document.getElementById("root")
);