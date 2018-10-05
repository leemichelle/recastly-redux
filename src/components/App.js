import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import Nav from './Nav.js';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
import handleVideoSearch from '../actions/search.js';
import store from '../store/store.js';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(handleVideoSearch('dancing monkeys'))
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
  }
}