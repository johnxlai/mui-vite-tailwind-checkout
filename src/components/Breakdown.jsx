import * as React from 'react';
import PropTypes from 'prop-types';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { billsBreakdown } from '../data/billsBreakdown';

function Breakdown({ totalPrice }) {
  return (
    <React.Fragment>
      <Typography variant="subtitle2" color="text.secondary">
        Amount Due
      </Typography>
      <Typography variant="h4" gutterBottom>
        {totalPrice}
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
