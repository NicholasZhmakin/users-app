import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/usersDataActions';
import UsersList from '../sub/UsersList';
import Details from '../sub/Details';
import Search from '../sub/Search';
import PropTypes from 'prop-types';

class Home extends Component {
  
  componentDidMount(){
    this.props.fetchUsers();
  };

  render() {
    const { users, user, loader} = this.props;
      if (loader) {
        return <div className='loader'>Loading...</div>
      } else {
        return (
          <div className="container my-3">
            <div className="row">
              <div className="col-4">
                <Search/>
                <UsersList handleDetail={this.handleDetail} users={users}/>
              </div>
              <div className="col-8 bg-info p-3 rounded">
                {this.props.match.path === "/"?
                (<div className='empty'>Select user</div>) : 
                (<Details user={user}/>)}
              </div>
            </div>
          </div>)
      }
  }
};

Home.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  let lastName = ownProps.match.params.lastName;
  return {
    users: state.list.users.filter(user => JSON.stringify(user).toLowerCase().includes(state.filter)),
    user: state.list.users.find(user => user.general.lastName === lastName),
    loader: state.list.isFetching
  }
};

export default connect(mapStateToProps, {fetchUsers})(Home);