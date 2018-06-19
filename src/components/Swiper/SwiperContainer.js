import * as React from 'react'
import { connect } from 'react-redux'

import Swiper from './Swiper'

class SwiperContainer extends React.PureComponent {

  componentWillMount() {
    console.log(this.props.match.params.category)
	}

	renderUser() {
		return (
			<div>
				<Swiper user={this.props.user} />
				<div className="actions">
					<button className="dislike-button" onClick={this.props.dislikeAction}>Dislike</button>
					<button className="like-button" onClick={this.props.likeAction}>Like</button>
				</div>
			</div>
		);
	}

	render() {
		if(!this.props.user){
			return <h2> Loading... </h2>
		}
    else{
			return this.renderUser();
		}
	}

}

const mapStateToProps = (state) => {
  return {
    user: state
  }
}

export default connect(mapStateToProps, {  })(SwiperContainer)
