import React, { Component, PropTypes } from 'react';
import { FormControl } from 'react-bootstrap';
import { accepted, rejected, noResponse } from '../utils/filters';

export default class QuotedSelect extends Component {
  render() {
    return (
      <FormControl componentClass="select" placeholder="accepted" onChange={(e) => { this.props.filterData([e.target.value]) }}>
        <option value={accepted}>accepted</option>
        <option value={rejected}>rejected</option>
        <option value={noResponse}>(no response)</option>
      </FormControl>
    );
  }
}
