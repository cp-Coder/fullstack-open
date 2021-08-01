import React from 'react';

const FilterCountries = ({ newSearch, handleChange }) => {
    return (
        <div>
            find countries <input value={newSearch} onChange={handleChange} />
        </div>
    )
}

export default FilterCountries;
