import React from "react"
import axios from 'axios';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: [],
      isLoading: true,
    };
  }

  fetchMusic() {
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=georgewood_me&api_key=bef1d4520cfeb6e427d20e1fc40c6a27&format=json`)
    
    .then(res => 
      this.setState({
        track: res.data,
        isLoading: false
      })
    )
    .catch((err) => {
      console.log(err + ': Error accessing Last FM API');
    });
  }

  componentDidMount() {
    this.fetchMusic();
  }
  
  render() {
    return (
      <>
        {!this.state.isLoading ? (
          <>
            <span className="block">I've just listened to <strong>{ this.state.track.recenttracks.track[0].name }</strong> by <strong>{ this.state.track.recenttracks.track[0].artist["#text"] }</strong></span>
          </>
        ) : (
          <span className="block">I've just listened to &hellip;</span>
        )}
      </>
    );
  }
}

export default Reviews;