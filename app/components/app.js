import React, { Component, PropTypes } from 'react';
import { notReviewed, quoteAccepted } from '../utils/filters';
import tableColumns from '../utils/table-columns';
import { Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, PageHeader } from 'react-bootstrap';
import DataTable from './data-table';
import SubmissionSelect from './submissions-select';
import QuotedSelect from './quoted-select';

export default class App extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      data: this.props.initialData || [],
      dataType: 'submissions',
      filters: [notReviewed],
      filteredData: filterData([notReviewed], this.props.initialData),
      tableColumns: tableColumns.notReviewed
    };

    this.handleChangeDataType = this.handleChangeDataType.bind(this);
    this.setTableColumns = this.setTableColumns.bind(this);
    this.setFilters = this.setFilters.bind(this);
  }

  handleChangeDataType(e) {
    const dataType = e.target.value;
    let apiURL, columns, filters;

    if (dataType === 'submissions') {
      apiURL = 'api/submissions';
      columns = tableColumns.notReviewed;
      filters = [notReviewed];
    } else {
      apiURL = 'api/submissions/quoted';
      columns = tableColumns.quoteAccepted;
      filters = [quoteAccepted];
    }

    fetch(apiURL, {
      accept: 'application/json'
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ data, dataType, tableColumns: columns });
      this.setFilters(filters);
    })
    .catch(console.error);
  }

  setTableColumns(tableColumns) {
    this.setState({ tableColumns });
  }

  setFilters(filters) {
    this.setState({ filters: filters, filteredData: filterData(filters, this.state.data) });
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader style={ { borderBottom: 'none' } }>Underwriter Portal</PageHeader>
        </Row>
        <Row>
          <Col sm={12}>
            <Form inline>
              <FormGroup>
                <ControlLabel>View</ControlLabel>
                {' '}
                <FormControl componentClass="select" value={this.state.dataType} onChange={this.handleChangeDataType}>
                  <option value="submissions">client submissions</option>
                  <option value="quoted">quoted submissions</option>
                </FormControl>
              </FormGroup>
              {' '}
              <FormGroup>
                <ControlLabel>that have been</ControlLabel>
                {' '}
              {
                this.state.dataType === 'submissions' ? <SubmissionSelect setFilters={this.setFilters} setTableColumns={this.setTableColumns} />
                                                      : <QuotedSelect setFilters={this.setFilters} setTableColumns={this.setTableColumns} />
              }
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <DataTable data={this.state.filteredData} columns={this.state.tableColumns}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

function filterData(filters, data) {
  let filteredData = [...data];

  filters.forEach(filterFn => {
    filteredData = filteredData.filter(filterFn);
  });

  return filteredData;
}

App.propTypes = {
  initialData: PropTypes.array.isRequired
}
