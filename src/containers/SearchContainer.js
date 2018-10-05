import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

var mapStateToProps = () => ({})

var mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: (e) => (
    dispatch(handleSearchChange(e.target.value))
  )
})

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;