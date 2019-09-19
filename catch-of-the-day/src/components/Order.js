import React, { Component } from "react";
import { formatPrice } from "../helpers";
import { link } from "fs";

export default class Order extends Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    // Make sure the fish is loaded before we continue
    if (!fish) return null;
    if (count <= 0) {
      return null;
    } else if (!isAvailable) {
      return (
        <li key={key}>
          {console.log(count)}
          Sorry! {fish ? fish.name : "Fish"} is no longer available.
          <button onClick={() => this.props.removeFromOrder(key, fish.status)}>
            X
          </button>
        </li>
      );
    } else {
      return (
        <li key={key}>
          <span>
            {count} lbs {fish.name}
          </span>
          <span className="price">{formatPrice(count * fish.price)}</span>
          <button onClick={() => this.props.removeFromOrder(key, fish.status)}>
            X
          </button>
        </li>
      );
    }
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";

      if (isAvailable) {
        return prevTotal + count * fish.price;
      } else {
        return prevTotal;
      }
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}
