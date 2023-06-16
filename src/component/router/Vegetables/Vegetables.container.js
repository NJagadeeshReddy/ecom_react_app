import React, { PureComponent } from "react";
import Vegetablescomponent from "./Vegetables.component";

export default class Vegetablescontainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      vegetables: [],
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    fetch("http://localhost:3000/vegetables")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          vegetables: data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { vegetables } = this.state;
    return (
      <div>
        <Vegetablescomponent vegetables={vegetables} />
      </div>
    );
  }
}
