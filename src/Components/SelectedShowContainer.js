import React, { Component, useState } from 'react';
import Episode from './Components/Episode';
var _ = require('lodash');

function SelectedShowContainer(props) {
  const [selectedSeason, setSelectedSeason] = useState(1);

  const mapSeasons = () => {
    if (!!props.episodes){
      let seasons = _.uniq(props.episodes.map((e)=> e.season))

      return seasons.map((s) => {
        return (<option value={s} key={s}>Season {s}</option>)
      });
    }
  }

  const mapEpisodes = () => {
    return props.episodes.map((e)=>{
      if (e.season === selectedSeason){
        return (<Episode eachEpisode={e} key={e.id}/>)
      }
    })
  }

  const handleSelectionChange = (e) => {
    setSelectedSeason(e.target.value);
  }

  const { selectedShow } = props;

  return (
    <div style={{position: "static"}}>
      <h2>{selectedShow.name}</h2>
      <img src={selectedShow.image.medium} alt=""/>
      <p dangerouslySetInnerHTML={{__html: selectedShow.summary}}></p>
      <p>Premiered: {selectedShow.premiered}</p>
      <p>Status: {selectedShow.status}</p>
      <p>Average Rating: {selectedShow.rating.average}</p>
      <select style={{display: 'block'}} onChange={this.handleSelectionChange}>
        {mapSeasons()}
      </select>
      {mapEpisodes()}
    </div>
  );
}

export SelectedShowContainer;
