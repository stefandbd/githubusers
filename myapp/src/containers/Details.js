import React, {Component} from 'react';
import {load as loadUser} from '../actions/useraction';
import {connect} from 'react-redux';
import Loader from '../components/Loader';
import  { history } from '../store';
import { Jumbotron, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Header from '../components/Header';




@connect(
  (state) => ({
    userLoadingD: state.user.loading,
    userLoadedD: state.user.loaded,
    userDetails: state.user.data,
  }),{
    loadUser,
  }
)

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      repos_url: '',
      gir_url: '',
      type:'',
      avatar:''
    };
  }

  componentDidMount(){
  }

  componentWillMount() {
    if(this.props.userDetails){
    this.search(this.props.match.params.username, this.props.userDetails);
    }
    this.props.loadUser(this.props.match.params.username).then(res => {console.log('res', res.payload.data)
         this.setState({
            repos_url: res.payload.data.repos_url,
            git_url: res.payload.data.url,
            type: res.payload.data.type,
            avatar: res.payload.data.avatar_url,
          });
  });
  }

  search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].login === nameKey) {
          console.log('myarray[i]', myArray[i]);
          this.setState({
            repos_url: myArray[i].repos_url,
            git_url: myArray[i].url,
            type: myArray[i].type,
            avatar: myArray[i].avatar_url
          })
            return myArray[i];
        }
    }
}

  
  render() {
    const {
      userLoadingD,
      userLoadedD,
      userDetails,
    } = this.props;
console.log('this props', this.props);
    return (
      <div className="user-page">
      <Header />
      <Breadcrumb>
        <BreadcrumbItem><span>Home</span></BreadcrumbItem>
        {userLoadingD &&
            <Loader/>
          }
        <BreadcrumbItem active>{this.props.match.params.username}</BreadcrumbItem>
      </Breadcrumb>
      <div>
      {!userLoadingD && userLoadedD && userDetails &&
      <Jumbotron>
        <h1 className="display-3">That's <span className="titleUser">{this.props.match.params.username}</span></h1>
        <div className="jContainer">
        <div className="columnImage">
              <img src={this.state.avatar} alt="" />
            </div>
          <div className="columnInfo">
            <p className="lead">
            <span className="titleDetail">GitHub account:</span> {this.state.git_url}
            </p>
            <p className="lead">
            <span className="titleDetail">Respos URL:</span> {this.state.repos_url}
            </p>
            <p className="lead">
            <span className="titleDetail">User Type:</span> {this.state.type}
            </p>
            </div>
    
        </div>
        <hr className="my-2" />
        <p className="lead">
          <Button color="primary" onClick={history.goBack}>Back</Button>
        </p>
      </Jumbotron>
      }
    </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
      nameAsProps: state.username,
  }
}



export default Details;