import React, {Component} from 'react';
import {load as loadUsers} from '../actions/userlistaction';
import {connect} from 'react-redux';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Details from './Details';
import PageList from '../components/Pagination';
import {Route, Link} from 'react-router-dom';

// import _ from 'lodash';
import {
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

@connect(
  (state) => ({
    usersLoading: state.userlist.loading,
    usersLoaded: state.userlist.loaded,
    usersList: state.userlist.list,
  }),{
    loadUsers,
  }
)

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      mountedPage: 1,
      repos_url: '',
      avatar_url: '',
    };
  }

  componentDidMount(){
  }

  componentWillMount() {console.log('nice')
    let query = new URLSearchParams(this.props.location.search);
    let currentPage = query.get('page');
    if (currentPage) {
      this.setState({mountedPage: Number(currentPage)});
      this.props.loadUsers(currentPage);
    }else{
      this.props.loadUsers(1)
    }
  }

  render() {
    const {
      usersLoading,
      usersLoaded,
      usersList,
    } = this.props;
    const {
      mountedPage
    } = this.state;

    console.log('usersList', usersList);
    return (
      <div className="user-page">
        <div className="container">
        <Header />
          <PageList
            count={99}
            mountedPage={mountedPage}
            perPage={10}
          />
          {usersLoading &&
            <Loader/>
          }
          {!usersLoading && usersLoaded && Array.isArray(usersList) &&
            <ListGroup>
              {usersList.map((person,index) => {
                return(
        <ListGroupItem key={person.repos_url+index}>
        <Link to={`/users/${person.login}`}>
        <div className="wrapper">
                    <img src={person.avatar_url} alt=""/>                 
                       </div>
                    </Link>
                    <h2>{person.login}</h2>
                  <Route path="/users/:username" exact component={() => <Details socket={person.avatar_url} />}/>
        </ListGroupItem>
                )
              })}
        </ListGroup>
          }
          <PageList
            count={99}
            mountedPage={mountedPage}
            perPage={10}
          />
        </div>
      </div>
    );
  }
}


export default UserList;