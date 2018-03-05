import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		if (!this.props.book) {
			return <div>Select a book to begin</div>;
		}

		return (
			<div>
				<h3>Details for:</h3>
				<div>Title: {this.props.book.title}</div>
				<div>Pages: {this.props.book.pages}</div>
				<div>Author: {this.props.book.author}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		// activeBook from our activeBook pierce of state
		// in reducers/index.js in the combineReducers
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);
