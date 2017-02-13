import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      todos: this.props.initialData || []
    }
  }

  render() {
    return (
      <div>
        {
          this.state.todos.map((todo, i) => <li key={i}>{ todo }</li>)
        }
      </div>
    );
  }
}

App.propTypes = {
  initialData: PropTypes.array
}
