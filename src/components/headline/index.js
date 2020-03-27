import React, { Component } from "react";
import PropTypes from "prop-types";

class Headline extends Component {
  render() {
    const { header, desc } = this.props;
    if (!header) return null;

    return (
      <div data-test="headlineComponent">
        <h1 data-test="header">{header}</h1>
        <p data-test="desc">{desc}</p>
      </div>
    );
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArray: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      statusOnline: PropTypes.bool
    })
  )
};

export default Headline;
