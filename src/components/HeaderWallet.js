import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HeaderWallet extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          { email }
        </p>
        <p data-testid="total-field">
          0
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }
}

HeaderWallet.propTypes = {
  email: PropTypes.string,
}.required;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(HeaderWallet);
