import React, { Component, PropTypes } from 'react';
import { FormControl } from 'react-bootstrap';
import { notReviewed, notQuoted } from '../utils/filters';
import tableColumns from '../utils/table-columns';

export default class SubmissionsSelect extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      selected: 'notReviewed'
    }
  }

  handleChange(e) {
    const selected = e.target.value;
    let filters, columns;

    if (selected === 'notReviewed') {
      filters = [notReviewed];
      columns = tableColumns.notReviewed;
    } else {
      filters = [notQuoted];
      columns = tableColumns.notQuoted;
    }

    this.setState({ selected });
    this.props.setFilters(filters);
    this.props.setTableColumns(columns);
  }

  render() {
    return (
      <FormControl componentClass="select" value={this.state.selected} onChange={this.handleChange.bind(this)}>
        <option value="notReviewed">received but not reviewed</option>
        <option value="notQuoted">reviewed but not quoted</option>
      </FormControl>
    );
  }
}

SubmissionsSelect.propTypes = {
  setFilters: PropTypes.func.isRequired,
  setTableColumns: PropTypes.func.isRequired
};
