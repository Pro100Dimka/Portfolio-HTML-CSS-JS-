import React from "react";
import restaurants from "../sample-restaurants";

class Landing extends React.Component {
  state = {
    display: false,
    title: "",
    url: "",
  };

  displayList = () => {
    const display = this.state.display;
    this.setState({ display: !display });
  };
  getTitle = (restaurant) => {
    const title = restaurant.title;
    const url = restaurant.url;
    this.setState({ title: title, url: url, display: false });
  };
  goToRestaurant = () => {
    const url = this.state.url;
    this.props.history.push(`/restaurant/${url}`);
  };
  render() {
    console.log(this);
    return (
      <div className="restaurant_select">
        <div className="restaurant_select_top">
          <div
            onClick={this.displayList}
            className="restaurant_select_top-header font-effect-outline"
          >
            {this.state.title ? this.state.title : "Выбери ресторан"}
          </div>

          <div className="arrow-picker">
            <div className="arrow-pickker-up"></div>
            <div className="arrow-pickker-down"></div>
          </div>
        </div>

        {this.state.display ? (
          <div className="restaurant_select_bottom">
            <ul>
              {restaurants.map((restaurant) => {
                return (
                  <li
                    onClick={() => this.getTitle(restaurant)}
                    key={restaurant.id}
                  >
                    {restaurant.title}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
        {this.state.title && !this.state.display ? (
          <button onClick={this.goToRestaurant}>Перейти в ресторан</button>
        ) : null}
      </div>
    );
  }
}

export default Landing;
