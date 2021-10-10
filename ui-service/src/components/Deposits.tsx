import * as React from 'react';
import { green } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
export default function Deposits() {
  const greenColor = green[600]
  return (
   <div>
      <Grid container spacing={3} >
               {/* Recent Deposits */}
               <Grid item xs={6}  md={6} lg={6}>
                  <Title color="primary">Cash in Morning</Title>
                  <div style={{display:"flex", justifyContent:"center"}}>
                  <Typography component="p" variant="h4">
                  Rs. 1,50,000
                  </Typography>
                  </div>
                  <div style={{display:"flex", justifyContent:"center"}}>
                  <Typography  component="p" color="text.secondary" justifyContent="center">
                    on 15 March, 2019
                  </Typography>
                  </div>
               </Grid>
              <Grid item xs={6}   md={6} lg={6}>
                    <Title color={greenColor}>Cash Balance</Title>
                    <div style={{display:"flex", justifyContent:"center"}}>
                    <Typography component="p" variant="h4">
                    Rs. 1,50,000
                    </Typography>
                    </div>
                    <div style={{display:"flex", justifyContent:"center"}}>
                    <Typography component="p" color="text.secondary" justifyContent="center">
                      on 15 March, 2019
                    </Typography>
                    </div>
              </Grid>
      </Grid>
       <div style={{display:"flex", justifyContent:"center"}}>
           <Button style={{width:"200px" , margin:"40px"}}  variant="contained">Transactions</Button>
       </div>
    </div>
  );
}