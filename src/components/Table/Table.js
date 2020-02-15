import React, { Component } from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Authors</th>
        <th>Books</th>
        <th>Price</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
    const rows = props.authors.map((row, index) => {
        return (
            <tr key={ index }>
                <td>{ row.name }</td>
                <td>{ row.book }</td>
                <td>{ row.price }</td>
                <td><button className="waves-effect waves-light btn blue lighten-2" onClick={() => { props.removeAuthor(index) }}>Remove</button></td>
            </tr>
        );
    });

  return (
    <tbody>
        { rows }
    </tbody>
  );
};

class Table extends Component {
  render() {
    const { authors, removeAuthor } = this.props;
    //console.log(authors);
    return (
      <table className="centered highlight">
        <TableHead />
        <TableBody authors={ authors } removeAuthor={ removeAuthor } />
      </table>
    );
  }
}

export default Table;
