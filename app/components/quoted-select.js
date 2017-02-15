import React, { Component, PropTypes } from 'react';
import { FormControl } from 'react-bootstrap';
import { quoteAccepted, quoteRejected } from '../utils/filters';
import tableColumns from '../utils/table-columns';

export default class QuotedSelect extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      selected: 'quoteAccepted'
    };
  }

  handleChange(e) {
    const selected = e.target.value;
    let filters, columns;

    if (selected === 'quoteAccepted') {
      filters = [quoteAccepted];
      columns = tableColumns.quoteAccepted;
    } else {
      filters = [quoteRejected];
      columns = tableColumns.quoteRejected;
    }

    this.setState({ selected });
    this.props.setFilters(filters);
    this.props.setTableColumns(columns);
  }

  render() {
    return (
      <FormControl componentClass="select" value={this.state.selected} onChange={this.handleChange.bind(this)}>
        <option value="quoteAccepted">accepted</option>
        <option value="quoteRejected">rejected</option>
        {/* <option value={noResponse}>(no response)</option> */}
      </FormControl>
    );
  }
}

QuotedSelect.propTypes = {
  setFilters: PropTypes.func.isRequired,
  setTableColumns: PropTypes.func.isRequired
};
