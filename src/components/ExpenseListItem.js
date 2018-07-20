import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// load a locale
numeral.register('locale', 'lkr', {
  delimiters: {
      thousands: ',',
      decimal: '.'
  },
  abbreviations: {
      million: 'mn'
  },
  currency: {
      symbol: 'Rs. '
  }
});

// switch between locales
numeral.locale('lkr');

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
    {numeral(amount / 100).format('$0,0.00')}
     - 
     {moment(createdAt).format('MMMM Do, YYYY')}
     </p>
  </div>
);

export default ExpenseListItem;
