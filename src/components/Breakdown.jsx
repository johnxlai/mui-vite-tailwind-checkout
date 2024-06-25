import * as React from 'react';
import PropTypes from 'prop-types';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const billsBreakdown = [
  {
    name: 'Total Amount',
    desc: 'Due this month',
    price: '$306.10',
  },
  {
    name: 'Bill Amount',
    desc: 'Monthly subscription',
    price: '$150.00',
  },
  {
    name: "Last month's balance",
    desc: 'Late monthly subscription',
    price: '$151.61',
  },
  {
    name: 'Service Fee',
    desc: 'Payment charges',
    price: '$4.49',
  },
];

function Breakdown({ totalPrice }) {
  return (
    <React.Fragment>
      <Typography variant="subtitle2" color="text.secondary">
        Amount Due
      </Typography>
      <Typography variant="h4" gutterBottom>
        ${totalPrice}
      </Typography>
      <List disablePadding>
        {billsBreakdown.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              secondary={product.desc}
            />
            <Typography variant="body1" fontWeight="medium">
              {product.price}
            </Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

Breakdown.propTypes = {
  totalPrice: PropTypes.string.isRequired,
};

export default Breakdown;
