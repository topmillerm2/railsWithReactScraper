import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Home extends Component {
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { el, url } = this.state;
    this.props.submitForm(el, url);
  };

  render() {
    return (
      <div>
        {this.props.results.element && this.props.results.element}
        <form onSubmit={this.onSubmit}>
          <label>Html Element:</label>
          <input type="text" name="el" onChange={this.onInputChange} />
          <label>URL:</label>
          <input type="text" name="url" onChange={this.onInputChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mstp = ({ results }) => {
  return { results };
};

export default connect(
  mstp,
  actions
)(Home);
