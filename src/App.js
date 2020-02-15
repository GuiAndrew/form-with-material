import React, { Component, Fragment } from "react";
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Table from "./components/Table/Table";
import Form from "./components/Form/Form";
import Header from './components/Header/Header';
// import Counter from './components/Counter';

class App extends Component {
  state = {
    authors: [
      {
        name: "Bruce",
        book: "React",
        price: "1000"
      },
      {
        name: "Sabrina",
        book: "Angular",
        price: "1100"
      },
      {
        name: "Manu",
        book: "DotNet",
        price: "1300"
      },
      {
        name: "Lu Win",
        book: "Sql",
        price: "1200"
      },
      {
        name: "Sun Shine",
        book: "Java",
        price: "1200"
      }
    ]
  };

  removeAuthor = index => {
    const { authors } = this.state;

    this.setState({
      authors: authors.filter((author, currentPosition) => {
        // console.log(index, currentPosition);
        return currentPosition !== index;
      })
    });
  };

  submitCheck = author => {
    this.setState({ authors: [...this.state.authors, author] });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container margem-bottom">
          <Table authors={this.state.authors} removeAuthor={this.removeAuthor} />
          <Form submitCheck={ this.submitCheck } />
        </div>
        {/* <Counter /> */}
      </Fragment>
    );
  }
}

export default App;
