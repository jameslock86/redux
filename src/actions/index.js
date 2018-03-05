export function selectBook(book) {
//selectbok is an action creator it needsto retuen an action an objectwith a type property
	return {
		type:'BOOK_SELECTED',
		payload: book
	};

}
