import React from "react";

class Burgers extends React.Component {
  handleCLick = () => {
    this.props.addToOrder(this.props.index);
  };
  render() {
    const image = this.props.details.image;
    const desc = this.props.details.desc;
    const name = this.props.details.name;
    const price = this.props.details.price;
    const status = this.props.details.status;
    const isAvailable = status === "available";
    return (
      <li className="menu-burger">
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
        <div className="burger-details">
          <h3 className="burger-name">
            {name}
            <span className="price">₴ {price}</span>
          </h3>
          <p>{desc}</p>
          <button
            className="buttonOrder"
            disabled={!isAvailable}
            onClick={this.handleCLick}
          >
            {isAvailable ? "Заказать" : "Временно нет"}
          </button>
        </div>
      </li>
    );
  }
}

export default Burgers;
