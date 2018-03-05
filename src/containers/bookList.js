import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook}from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
	renderList(){
		return this.props.books.map((book) => {
			return (
				<li
					key={book.title}
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
				</li>
			);
		});
	}
	render(){
		return (
			<ul className= "list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}
function mapStateToProps(state) {
	//whatever gets returned from here shows up as props for booklist
	return{
		books: state.books
	};
}

//anything returned from the fun will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
	// whenver select book is called the result should be passed to all of our reducrs
	return bindActionCreators({selectBook: selectBook}, dispatch);

}

// promote booklist from a componet to a container. it need to know about this new dispatch methoud, selected. Make it availble as a prop.
export default connect(mapStateToProps,mapDispatchToProps)(BookList);
