import React, { Component } from 'react';
import { connect } from 'react-redux';
import {searchUser} from '../../actions/searchActions';

class Search extends Component {

handelChange = (e) => {
  this.props.findUser(e.target.value.toLowerCase());
};

render() {
    return (
      <div className="container bg-info shadow rounded-top p-3">
        <input onChange={this.handelChange} id="title" placeholder='Search...'  className='form-control'  type="text"/>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    findUser: (word) => dispatch(searchUser(word))
  }
};
  
export default connect(null, mapDispatchToProps)(Search);