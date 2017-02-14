import React, { Component, PropTypes } from 'react';
import { notReviewed, quoteAccepted } from '../utils/filters';
import columns from '../utils/tableColumns';
import { Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import DataTable from './data-table';
import SubmissionSelect from './submissions-select';
import QuotedSelect from './quoted-select';

export default class App extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      data: this.props.initialData || [],
      dataType: 'submissions',
      filteredData: this.filterData([notReviewed]),
      tableColumns: columns.notReviewed
    };
  }

  setDataType: (dataType) => {
    let apiURL, tableColumns, filters;

    if (dataType === 'submissions') {
      apiURL = '/submissions';
      tableColumns = columns.notReviewed;
      filters = [notReviewed];
    } else {
      apiURL = '/submissions/quoted';
      tableColumns = columns.quoteAccepted;
      filters = [quoteAccepted];
    }

    this.setState({ dataType, tableColumns, filteredData: this.filterData(filters) });

    fetch(apiURL, {
      accept: 'application/json'
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ data });
    })
    .catch(console.error);
  }

  setTableColumns: (tableColumns) => {
    this.setState({ tableColumns });
  }

  filterData: (filters) => {
    let filteredData = this.state.data;

    filters.forEach(filterFn => {
      filteredData = filteredData.filter(filterFn);
    });

    this.setState({ filteredData });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <Form inline>
              <FormGroup controlId="formInlineName">
                <ControlLabel>View</ControlLabel>
                {' '}
                <FormControl componentClass="select" value={this.state.dataType}>
                  <option value="submissions">submissions</option>
                  <option value="quoted">quoted rates</option>
                </FormControl>
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineEmail">
                <ControlLabel>that have been</ControlLabel>
                {' '}
              {
                this.state.dataType === 'submissions' ? <SubmissionSelect filterData={this.filterData.bind(this)} /> : <QuotedSelect filterData={this.filterData.bind(this)} />
              }
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <DataTable data={this.state.filteredData} columns={this.state.columns}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

App.propTypes = {
  initialData: PropTypes.array.isRequired
}
