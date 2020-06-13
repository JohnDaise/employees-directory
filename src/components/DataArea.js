import React, { Component } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
import "../styles/DataArea.css";
import friends from "../friends.json";

export default class DataArea extends Component {
  state = {
    users: [],
    order: "descend",
    filteredUsers: []
  }

  headings = [
    { name: "Image", width: "10%" },
    { name: "Name", width: "10%" },
    { name: "Phone", width: "20%" },
    { name: "Email", width: "20%" },
    { name: "DOB", width: "10%" }
  ]

  handleSort = heading => {
    console.log(heading);
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend"
      })
    } else {
      this.setState({
        order: "descend"
      })
    }

    const compareFnc = (a, b) => {
      if (this.state.order === "ascend") {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return a[heading].localeCompare(b[heading]);
        } else if (heading === "dob") {
          return a[heading].localeCompare(b[heading]);
        } else if (heading === "phone") {
          return a[heading].localeCompare(b[heading]);
        } else if (heading === "email") {
          return a[heading].localeCompare(b[heading]);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return b[heading].localeCompare(a[heading]);
        } else if (heading === "dob") {
          return b[heading].localeCompare(a[heading]);
        } else if (heading === "phone") {
          return b[heading].localeCompare(a[heading]);
        } else if (heading === "email") {
          return b[heading].localeCompare(a[heading]);
        }  
        else {
          return b[heading] - a[heading];
        }
      }

    }
    const sortedUsers = this.state.filteredUsers.sort(compareFnc);
    this.setState({ filteredUsers: sortedUsers });
  }

  handleSearchChange = event => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.users.filter(item => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: filteredList });
  }

  componentDidMount() {
      this.setState({
        users: friends,
        filteredUsers: friends
      });
  }

  render() {
    return (
      <>
        <Nav handleSearchChange={this.handleSearchChange} />
        <div className="data-area">
          <DataTable
            headings={this.headings}
            users={this.state.filteredUsers}
            handleSort={this.handleSort}
          />
        </div>
      </>
    );
  }
}
