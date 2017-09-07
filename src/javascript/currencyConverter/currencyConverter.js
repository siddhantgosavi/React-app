import React from 'react';
import currency from '../../static/currency.js';
import SelectCurrency from './selectCurrency.js';
var underscore = require('underscore');

export default class  CurrencyConverter extends React.Component {
    constructor() {
        super();
        this.state = {
            currencyData: currency.currencies,
            firstCurrency: underscore.first(currency.currencies), //return first value
            secondCurrency: underscore.last(currency.currencies), //return second value from array
        };
        this.handleSelectCurrency = this.handleSelectCurrency.bind(this);
    }

    handleSelectCurrency(name) {
        let updatedCurrency = underscore.filter(this.state.currencyData, (index, key) => {
            return  (underscore.indexOf([index.name], name) > -1)
        }); //return currency with matching name
        // let object = underscore.object(underscore.map(updatedCurrency, (index, key) => {
        //     return index;
        // }));
        // console.log(object);
        this.setState({
            secondCurrency: updatedCurrency,
        });
    }

    render() {
  //      console.log(this.state.secondCurrency);
        const { currencyData, firstCurrency, secondCurrency } = this.state;
        return (
            <div className="currencyConverterWrap">
                <SelectCurrency data={currencyData} handleSelectCurrency={this.handleSelectCurrency} />
                <div>
                  <p>{firstCurrency.name}</p>
                  <p>{
                          underscore.map(secondCurrency, (index, key) => {
                          return (<p>{index.name}</p>)
                    })}
                  </p>
                </div>
            </div>
          );
    }
};
