import * as React from 'react';
import Typography from '@mui/material/Typography';

interface TitleProps {
  children?: React.ReactNode;
  color?:string;
}

export default function Title(props: TitleProps) {
  return (
    <Typography component="h1" variant="h5" color={props.color??"primary"} style={{display:"flex", justifyContent:"center"}} gutterBottom>
      {props.children}
    </Typography>
  );
}