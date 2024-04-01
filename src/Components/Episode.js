import React from 'react';

const Episode = (props) => {
  let { myEpisode } = props

  return (
    <div>
      Episode {myEpisode.number} - {myEpisode.title}
    </div>
  )
}

export default Episode;
