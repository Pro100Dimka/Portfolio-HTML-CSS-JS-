import React from "react";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import sampleBurgers from "../sample-burgers";
import Burgers from "./Burgers";
import base from "../Base";

class App extends React.Component {
  state = {
    burgers: {},
    order: {},
  };

  componentDidMount() {
    this.ref = base.syncState(
      `${this.props.match.params.restaurantId} /burgers`,
      { context: this, state: "burgers" }
    );
    const localStorageRef = localStorage.getItem(
      this.props.match.params.restaurantId
    );
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentDidUpdate() {
    const { params } = this.props.match;
    localStorage.setItem(
      this.props.match.params.restaurantId,
      JSON.stringify(this.state.order)
    );
  }

  addBurger = (burger) => {
    // 1. Делаем копию объекта state
    const burgers = { ...this.state.burgers };
    // 2. Добавить новый бургер в переменную
    burgers[`burger${Date.now()}`] = burger;
    // 3. Записіваем наш новый объект burgers в state
    this.setState({ burgers });
  };

  loadSampleBurgers = () => {
    this.setState({ burgers: sampleBurgers });
  };
  addToOrder = (key) => {
    // 1. Делаем копию объекта state
    const order = { ...this.state.order };
    // 2. Добавить ключ к заказу со значением 1, либо обновить текущее значение
    order[key] = order[key] + 1 || 1;
    // 3. Записываем значение order в state
    this.setState({ order: order });
  };
  UpdateBurger = (key, UpdatedBurger) => {
    // 1. Делаем копию объекта state
    const burgers = { ...this.state.burgers };
    // 2. Обновляем нужный бургер
    burgers[key] = UpdatedBurger;
    // 3. Записываем обновленный бургер в state
    this.setState({ burgers });
  };
  deleteBurger = (key) => {
    // 1. Делаем копию объекта state
    const burgers = { ...this.state.burgers };
    // 2. Удаляем бургер
    burgers[key] = null;
    this.setState({ burgers });
  };
  deleteFromOrder = (key) => {
    // 1. Делаем копию объекта state
    const order = { ...this.state.order };
    // 2. Удаляем ордер
    delete order[key];
    this.setState({ order });
  };
  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header title="Very hot burger" />
          <ul className="burgers">
            {Object.keys(this.state.burgers).map((key) => {
              return (
                <Burgers
                  key={key}
                  index={key}
                  details={this.state.burgers[key]}
                  addToOrder={this.addToOrder}
                />
              );
            })}
          </ul>
        </div>
        <Order
          deleteFromOrder={this.deleteFromOrder}
          burgers={this.state.burgers}
          order={this.state.order}
        />
        <MenuAdmin
          UpdateBurger={this.UpdateBurger}
          addBurger={this.addBurger}
          loadSampleBurgers={this.loadSampleBurgers}
          burgers={this.state.burgers}
          deleteBurger={this.deleteBurger}
        />
      </div>
    );
  }
}
export default App;
