import React from 'react';
import PropTypes from 'prop-types';
var underscore = require('underscore');

const SelectCurrency = ({data, handleSelectCurrency}) => {

    const filterCurrency = underscore.filter(data, (currency, key) => {
                               return currency.code !== 'AUD'  //return currency array except code AUD
                           });

    return (
        <select onChange={(event) => handleSelectCurrency(event.target.value)}>
            {
                underscore.map(filterCurrency, (currency, key) => {
                    return (
                        <option key={key}>{currency.name}</option>
                    )
                })
            }
        </select>
      );
};
SelectCurrency.propTypes = {
    data: PropTypes.array.isRequired,
    handleSelectCurrency: PropTypes.func.isRequired
};
export default SelectCurrency;
