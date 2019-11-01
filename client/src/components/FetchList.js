import React from "react";
import axios from "axios";
import DisplayList from "./DisplayList";

class FetchList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5555/api/players")
      .then(res => {
        console.log(res.data);
        this.setState({
          data: res.data
        });
        console.log(this.state.data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Title of Page</h1>
        {this.state.data.map(player => (
          <DisplayList key={player.id} data={player} />
        ))}
      </div>
    );
  }
}

export default FetchList;
