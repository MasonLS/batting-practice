import React, { Component, PropTypes } from 'react';

export default class DataRow extends Component {
  render() {
    return (
      <tr>
        {
          this.props.columns.map((col, i) => createTableCell(col, i, this.props.row))
        }
      </tr>
    );
  }
}

function createTableCell(column, index, row) {
  let formattedContent = row[column.field];

  if (column.format !== undefined) {
    if (column.format === 'date') {
      formattedContent = formatDate(formattedContent);
    }
    if (column.format === 'dollar amount') {
      formattedContent = formatDollarAmount(formattedContent);
    }
  }

  return <td key={index}>{formattedContent}</td>
}

function formatDate(date) {
  return date.split(' ')[0];
}

function formatDollarAmount(dA) {
  return `$${dA}`;
}

DataRow.propTypes = {
  row: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired
};
