import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import remExpense from '../actions/remExpense';

class Table extends Component {
  render() {
    const { expenses, removeExpense } = this.props;
    return (
      <div>
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          {expenses.length > 0 && expenses.map((expense, index) => {
            const coin = Object.entries(expense.exchangeRates)
              .find(([key]) => key === expense.currency)[1];
            return (
              <tr key={ index }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{coin.name.split('/')[0]}</td>
                <td>{Number(coin.ask).toFixed(2)}</td>
                <td>{(Number(expense.value) * Number(coin.ask)).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => removeExpense(expense.id) }
                  >
                    D
                  </button>
                  <button type="button">E</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (id) => dispatch(remExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
