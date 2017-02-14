import React, { Component, PropTypes } from 'react';
import { FormControl } from 'react-bootstrap';
import { notReviewed, reviewed } from '../utils/filters';

export default class SubmissionsSelect extends Component {
  render() {
    return (
      <FormControl componentClass="select" placeholder="notReviewed" onChange={(e) => { this.props.filterData([e.target.value]) }}>
        <option value={notReviewed}>received but not reviewed</option>
        <option value={reviewed}>reviewed</option>
      </FormControl>
    );
  }
}
