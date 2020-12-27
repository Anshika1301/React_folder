import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import Sdata from './Sdata';
import './index.css';

ReactDom.render(
  <>
    <h1 className="heading">List of top 5 netflix series in 2020</h1>
    <Card
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      seriesname={Sdata[0].seriesname}
      link={Sdata[0].link}
    />
    <Card
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      seriesname={Sdata[1].seriesname}
      link={Sdata[1].link}
    />
    <Card
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      seriesname={Sdata[2].seriesname}
      link={Sdata[2].link}
    />

  </>,
  document.getElementById("root")
);