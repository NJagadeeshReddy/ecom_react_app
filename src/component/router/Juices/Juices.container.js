import React, { PureComponent } from "react";
import Juicescomponent from "./Juices.component";

export default class Juicescontainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      juices: [],
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    fetch("http://localhost:3000/juices")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          juices: data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { juices } = this.state;
    return (
      <div>
        <Juicescomponent juices={juices} />
      </div>
    );
  }
}
