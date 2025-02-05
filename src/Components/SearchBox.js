import React from 'react';

const SearchBox=({searchChange}) => {
    return(
        <div>
            <input 
            className='pa3 ba outline-0 br3 mv3 b--green bg-light-green'
            type='search'
            placeholder='search name'
            onChange={searchChange}
            />
        </div>
    );
}
export default SearchBox;