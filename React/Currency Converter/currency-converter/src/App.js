import "./App.css";
import React from "react";
import Header from "./header/header";
import CurrencyConverter from "./CurrencyConverter/CurrencyConverter";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrencyItems: [],
    };
  }
  getCurrencyFromApi = async () => {
    try {
      let response = await fetch(
        "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
      );
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  };
  async componentDidMount() {
    let CurrencyItems = await this.getCurrencyFromApi();
    this.setState({
      CurrencyItems: CurrencyItems,
    });
  }
  render() {
    return (
      <div className="App">
        <div class="main">
          <CurrencyConverter CurrencyItems={this.state.CurrencyItems} />
          <Header CurrencyItems={this.state.CurrencyItems} />
        </div>
      </div>
    );
  }
}
// getCurrencyFromApi = async () => {
//   try {
//     let response = await fetch(
//       "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
//     );
//     let responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     console.error(error);
//   }
// };
// function App() {
//   return (
//     <div className="App">
//       <Header getCurrencyFromApi={this.getCurrencyFromApi()} />
//       {/* <CurrencyConverter /> */}
//     </div>
//   );
// }

//export default App;
