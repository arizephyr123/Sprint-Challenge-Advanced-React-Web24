import React from "react";
import axios from "axios";
import { Table } from "reactstrap";

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
        //console.log(res.data);
        this.setState({
          data: res.data
        });
        //console.log(this.state.data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1 data-testid='pageTitle'>Women's World Cup players ranked by search interest</h1><h2>June-July 2019, worldwide</h2>
        <Table>
        <thead>
          <tr>
            <th data-testid='rankTableHeader'>Rank</th>
            <th>Name</th>
            <th>Country</th>
            <th>Interest Score</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(player => (
            <DisplayList key={player.id} data={player} />
          ))}
        </tbody>
        </Table>
      </div>
    );
  }
}

export default FetchList;
