import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pd2'>
			<input
				className='pa3 ba2 b--green bg-lightest-blue'
				type='search'
				placeholder='Search Robots'
				onChange = {searchChange}
			 />
		</div>
	);
}

export default SearchBox;