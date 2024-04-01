import React, { Component, useEffect, useState } from 'react';
import Adapter from '../Adapter';
import TVShowList from './TVShowList';
import Nav from './Nav';
import SelectedShowContainer from './SelectedShowContainer';
import { Grid } from 'semantic-ui-react';

function App() {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedShow, setSelectedShow] = useState("");
  const [episodes, setEpisodes] = useState([]);
  const [filterByRating, setFilterByRating] = useState("");

  useEffect(() => {
    Adapter.getShows().then(shows => setShows(shows));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [shows]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  }

  const handleFilter = (e) => {
    e.target.value === "No Filter" ? this.setState({ filterRating: "" }) : this.setState({ filterRating: e.target.value })
  }

  const selectShow = (show) => {
    Adapter.getShowEpisodes(show.id)
      .then((episodes) => {
        setSelectedShow(show);
        setEpisodes(episodes);
      })
  }

  displayShows = () => {
    if (filterByRating) {
      return shows.filter((s) => {
        return s.rating.average >= filterByRating
      })
    } else {
      return shows
    }
  }

  return (
    <div>
      <Nav handleFilter={handleFilter} handleSearch={handleSearch} searchTerm={searchTerm} />
      <div style={{
        display: "grid",
        gridTemplateColumns: "25% 75%",
      }}>
        <div>
          {!!selectedShow ? <SelectedShowContainer selectedShow={selectedShow} allEpisodes={episodes} /> : <div />}
        </div>
        <div
          style={{
            gridColumnStart: 2,
            background: "lightgray"
          }}>
          <TVShowList shows={displayShows()} selectShow={selectShow} searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );

}
export default App;
