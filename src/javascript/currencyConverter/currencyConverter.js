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
            secondCurrency: underscore.last(currency.currencies), //return last value from array
        };
        this.handleSelectCurrency = this.handleSelectCurrency.bind(this);
    }

    handleSelectCurrency(name) {
        let updatedCurrency = underscore.filter(this.state.currencyData, (index, key) => {
            return  (underscore.indexOf([index.name], name) > -1)
        });
        this.setState({
            secondCurrency: updatedCurrency[0],
        });
    }

    render() {
        const { currencyData, firstCurrency, secondCurrency } = this.state;
        return (
            <div className="currencyConverterWrap container">
                <h1>Select Currency</h1>
                <SelectCurrency data={currencyData} handleSelectCurrency={this.handleSelectCurrency} />
                <div className="currencyCalculationWrap row">
                    <div className="col-sm-6 col-md-6">
                        <h3>{firstCurrency.name}</h3>
                        <div className="input-group">
                            <span className="input-group-addon">$</span>
                            <input type="number" step="1" className="form-control"/>
                            <span className="input-group-addon">{firstCurrency.code}</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <h3>{secondCurrency.name}</h3>
                        <div className="input-group">
                            <span className="input-group-addon">$</span>
                            <input type="number" step="1" className="form-control" />
                            <span className="input-group-addon">{secondCurrency.code}</span>
                        </div>
                    </div>
                </div>
                <div className="row exchangeRateWrap">
                    <div className="col-sm-12">
                        <p><strong>Exchange Rate</strong></p>
                        <span>{firstCurrency.sign} {firstCurrency.sellRate} {firstCurrency.code} = {secondCurrency.sign} {secondCurrency.sellRate} {secondCurrency.code}</span>
                    </div>
                </div>
            </div>
          );
    }
};
