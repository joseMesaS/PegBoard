import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class Swiper extends Component{
	render() {
		return (
			<div className="user">
		

				<div>
					{/* <span className="name">{this.props.user.name}</span> */}
					{/* <span className="birthday">{this.props.user.birthday}</span> */}
					{/* <span className="city">{this.props.user.city}</span> */}

          {/* <span className="bio">{this.props}</span> */}

					{console.log(this.props)}




				</div>
			</div>
		)
	}
}

export default Swiper;
