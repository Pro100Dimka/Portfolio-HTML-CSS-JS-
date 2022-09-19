import React from "react";
import "./header.css";
export default class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <table className="CurrencyTable">
            <thead>
              <tr>
                <th>Curency</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              {this.props.CurrencyItems.map((item, key) => {
                return (
                  <tr key={key}>
                    <td key={item.cc}>{item.cc}</td>
                    <td key={item.rate}>{item.rate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
