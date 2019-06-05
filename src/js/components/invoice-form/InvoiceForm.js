import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addInvoice} from '../../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    addInvoice: invoice => dispatch(addInvoice(invoice)),
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: '',
      issueDate: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const {number, issueDate} = this.state;
    this.props.addInvoice({number, issueDate});
  }

  render() {
    const {number, issueDate} = this.state;

    return (
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="number">Number</label>
            <input type="text" id="number" value={number}
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="issueDate">Issue date</label>
            <input type="date" id="issueDate" value={issueDate}
                   onChange={this.handleChange}/>
          </div>
          <button type="submit">Save invoice</button>
        </form>
    );
  }
}

const InvoiceForm = connect(null, mapDispatchToProps)(ConnectedForm);

export default InvoiceForm;
