import React from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import "./CurrencyConverter.css";

export default class CurrencyConverter extends React.Component {
  state = {
    Currency: "",
    value: 0,
    CurrencyItems: [],
    RenderCurrencyItems: [],
    OptionsForFirstDropdown: [],
    CurrItem: [],
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.CurrencyItems !== this.props.CurrencyItems) {
      let FirstDefaultCurrency = [];
      let OptionsForFirstDropdown = [];
      let OptionsForSecondDropdown = [];
      for (let i = 0; i < nextProps.CurrencyItems.length; i++) {
        if (i < 2) {
          FirstDefaultCurrency.push(nextProps.CurrencyItems[i]);
        }
        OptionsForFirstDropdown.push(nextProps.CurrencyItems[i].cc);
        OptionsForSecondDropdown.push(nextProps.CurrencyItems[i].cc);
      }
      let AllRegions = [];
      AllRegions[0] = OptionsForFirstDropdown;
      AllRegions[1] = OptionsForSecondDropdown;
      this.setState({
        CurrencyItems: nextProps.CurrencyItems,
        RenderCurrencyItems: FirstDefaultCurrency,
        OptionsForFirstDropdown: AllRegions,
      });
    }
  }
  GetCurrencyTitles = () => {
    return this.state.CurrencyItems.map((i) => {
      return i.cc;
    });
  };
  onChange = ({
    target: {
      value,
      dataset: { currency },
    },
  }) => {
    this.setState({
      currency,
      value,
    });
  };
  ChangeCurrency = (currency, key) => {
    console.log("asdasdasd", currency);
    for (let i = 0; i < this.state.CurrencyItems.length; i++) {
      if (this.state.CurrencyItems[i].cc == currency) {
        this.state.RenderCurrencyItems[key] = this.state.CurrencyItems[i];
      }
    }
    this.state.CurrItem[key] = currency;
  };
  render() {
    const { value } = this.state;
    const currency = this.state.CurrencyItems[0]?.cc;
    const CurrObjCurrency = this.state.CurrencyItems.find(
      (n) => n?.cc === currency
    );
    const rate = CurrObjCurrency?.rate;
    return (
      <div className="CurrencyConverter">
        {this.state.RenderCurrencyItems.map((n, key) => (
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
            <DropDownList
              data={this.state.OptionsForFirstDropdown[key]}
              onChange={(event) => {
                this.ChangeCurrency(event.value, key);
              }}
              value={this.state.CurrItem[key]}
              defaultValue={this.state.OptionsForFirstDropdown[key][0]}
            />
          </div>
        ))}
      </div>
    );
  }
}
