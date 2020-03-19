import React from 'react'

const Filter = ({filterByName}) => {
    return (
        <>
        <h2>Find contact by name...</h2>
        <input type = 'text' onChange={filterByName} />
        </>
    );
}

export default Filter;