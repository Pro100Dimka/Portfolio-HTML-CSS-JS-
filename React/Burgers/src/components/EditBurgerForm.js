import React from "react";

class EditBurgerForm extends React.Component {
  handleChange = (event) => {
    const UpdatedBurger = {
      ...this.props.burger,
      [event.currentTarget.name]: event.currentTarget.value,
    };

    this.props.UpdateBurger(this.props.index, UpdatedBurger);
  };
  render() {
    return (
      <div className="burger-edit">
        <input
          name="name"
          type="text"
          value={this.props.burger.name}
          onChange={this.handleChange}
        />
        <input
          name="price"
          type="text"
          value={this.props.burger.price}
          onChange={this.handleChange}
        />
        <select
          className="status"
          name="status"
          value={this.props.burger.status}
          onChange={this.handleChange}
        >
          <option value="available">Доступно</option>
          <option value="unavailable">Недоступно</option>
        </select>
        <textarea
          name="desc"
          value={this.props.burger.desc}
          onChange={this.handleChange}
        />
        <input
          name="image"
          type="text"
          value={this.props.burger.image}
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.deleteBurger(this.props.index)}>
          Удалить из меню
        </button>
      </div>
    );
  }
}
export default EditBurgerForm;
