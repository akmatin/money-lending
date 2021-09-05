import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Title(props:any) {
  return (
    <Typography component="h2" variant="h6" color="secondary" gutterBottom>
      {props.children}
    </Typography>
  );
}