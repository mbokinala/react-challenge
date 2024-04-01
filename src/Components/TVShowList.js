import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';

function TVShowList(props) {
  mapAllShows = () => {
    if (!!props.searchTerm){
      props.shows.map((s) => {
        if (s.name.toLowerCase().includes(props.searchTerm)){
          (<TVShow show={s} key={s.id} selectShow={props.selectShow}/> )
        }
      })
    }
    return props.shows.map( (s)=> <TVShow show={s} key={s.id} selectShow={props.selectShow}/>)
  }

  return (
    <div
    className="TVShowList"
  >
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
        gap: "8px",
        padding: "16px"
      }}
    >
      {mapAllShows()}
    </div>
  </div>
  )
}

export default TVShowList;
