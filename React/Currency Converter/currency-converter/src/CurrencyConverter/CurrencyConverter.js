import React from "react";
import "./CurrencyConverter.css";

export default class CurrencyConverter extends React.Component {
  state = {
    Currency: "",
    value: 0,
  };
  GetCurrencyTitles = () => {
    return this.props.CurrencyItems.map((i) => {
      return i.cc;
    });
  };
  onChange = ({
    target: {
      value,
      dataset: { currency },
    },
  }) => {
    console.log("target", currency);
    console.log("target", value);
    this.setState({
      currency,
      value,
    });
  };
  render() {
    let Currency = this.GetCurrencyTitles();
    const { value } = this.state;
    const currency = this.props.CurrencyItems[0]?.cc;
    const CurrObjCurrency = this.props.CurrencyItems.find(
      (n) => n?.cc === currency
    );
    const rate = CurrObjCurrency?.rate;
    console.log("rete", rate);
    return (
      <div className="CurrencyConverter">
        {this.props.CurrencyItems.map((n) => (
          <div key={n?.cc}>
            {n?.cc}:
            <input
              key={n?.cc}
              data-currency={n?.cc}
              value={
                currency === n?.cc
                  ? value
                  : ((value / rate) * n?.rate).toFixed(2)
              }
              onChange={this.onChange}
            />
          </div>
        ))}
      </div>
    );
  }
}
