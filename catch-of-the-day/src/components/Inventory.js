import React, { Component } from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

export default class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load sample fishes</button>
      </div>
    );
  }
}
