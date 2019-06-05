import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchInvoices} from '../../actions';

const mapStateToProps = state => {
  return {invoices: state.invoices};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchInvoices: () => dispatch(fetchInvoices()),
  };
};

class ConnectedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoices: [],
    };
  }

  componentDidMount() {
    this.props.fetchInvoices();
  }

  render() {
    return (
        <table>
          <tbody>
          {this.props.invoices.map(el => (
              <tr key={el.number}>
                <td>{el.number}</td>
                <td>{el.issueDate}</td>
              </tr>
          ))}
          </tbody>
        </table>
    );
  }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;
