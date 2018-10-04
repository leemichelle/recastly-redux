import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';

var rootReducer = (state = null, action) => {
  combineReducers({videoListReducer, currentVideoReducer});
};



//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;

  // switch (action.type) {
  // case 'CHANGE_VIDEO':
  //   return action.video;

  // default:
  //   return state;
  // }