import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = () => {};

  var mapStateToProps = (state) => {
    // return {
      
    // }
  }

  var mapDispatchToProps = (dispatch) => {
    return {
      handleVideoListEntryTitleClick: (video) => {
        dispatch(changeVideo(video));
      }
    }
  }


// //VideoList.props.handleVideoListEntryTitleClick
// //TODO: define a VideoListContainer component which 
// //will hook up your action
// // dispatchers with your VideoList component props.

// export default connect( mapDispatchToProps)(VideoList);

export default VideoListContainer;