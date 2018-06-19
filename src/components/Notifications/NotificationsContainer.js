import * as React from 'react'
import {connect} from 'react-redux'
// import './Notifications.css'
import Notifications from './Notifications'
import {makeRequest, makeMatch} from '../../actions/users'
const r = {
  requesterId:3,
  posterId: 1,
  postBody: {
    postId:6,
    description: 'looking for somebody',
    category: 'cooking'
  }
}

class NotificationsContainer extends React.PureComponent {


  componentDidMount(){
    this.props.makeRequest(r)
    this.props.makeMatch({
      requesterId:3,
      posterId: 1,
      postBody: {
        postId:2,
        description: 'looking for somebody',
        category: 'cooking'
      }
    })
  }


  render() {
    
    // return <div>hola</div>
    return <Notifications users = { this.props.users } logUserId = { this.props.logUserId}/>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    logUserId: state.logUser
  }
}

export default connect(mapStateToProps, {makeRequest, makeMatch})(NotificationsContainer)
