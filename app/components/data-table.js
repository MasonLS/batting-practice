import React, { Component, PropTypes } from 'react';
import { Table } from 'react-bootstrap';
import DataRow from './data-row';

export default class DataTable extends Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            {
              this.props.columns.map(col => <th key={col.field}>{col.columnName}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            this.props.data.map(row => <DataRow key={row.ID} row={row} columns={this.props.columns} />)
          }
        </tbody>
      </Table>
    );
  }
}

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
}
