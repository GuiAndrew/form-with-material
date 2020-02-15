import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            book: '',
            price: ''
        }

        this.state = this.initialState;
    }

    inputCheck = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    formSubmit = () => {
        this.props.submitCheck(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, book, price } = this.state;
        return(
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="name">Name</label>
                        <input className="validate" id="name" type="text" name="name" value={ name } onChange={ this.inputCheck } required/>
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="book">Book</label>
                        <input className="validate" id="book" type="text" name="book" value={ book } onChange={ this.inputCheck } required/>
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="price">Price</label>
                        <input className="validate" id="price" type="text" name="price" value={ price } onChange={ this.inputCheck } required/>
                    </div>
                </div>
                <button className="waves-effect waves-light btn blue lighten-2" type="button" onClick={ this.formSubmit }>Submit</button>
            </form>
        );
    }
}

export default Form;