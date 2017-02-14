import React, { Component, PropTypes } from 'react';
import { Table } from 'react-bootstrap';

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
            this.props.data.map(row => {
              return (
                <tr key={row.id}>
                  {
                    this.props.columns.map(col => <td key={col.field}>{row[col.field]}</td>)
                  }
                </tr>
              );
            })
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
