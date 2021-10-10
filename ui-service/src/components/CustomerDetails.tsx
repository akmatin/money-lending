import React from 'react'
import WrapperContent from './WrapperComponent';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CustomerCompleteDetail from "./CustomerCompleteDetail";
import Orders from './Orders';
import CustomerMoneyTab from './CustomerMoneytab';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Title from './Title';


function CustomerDetails() {
    return (
       <WrapperContent>
            <Grid container spacing={3}>
               {/* Recent Deposits */}
               <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: "auto",
                  }}
                >
                    <CustomerCompleteDetail/>
                </Paper>
              </Grid>
               {/* Customer and Money Lending */}
               <Grid item xs={12} md={6} lg={6}>
              <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: "auto",
                  }}
                >
                  <CustomerMoneyTab isCustomerTab={true}/>
                  <div style={{marginTop:"10px"}}>
                  <Title>Retail</Title>
                  <Stack
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={2}
                    >
                        <Button style={{width:"200px"}}  variant="contained">New Booking</Button>
                        <Button style={{width:"200px"}}  variant="contained">Pay Remaining</Button>
                    </Stack>
                    </div>
                  </Paper>
              </Grid>
              {/* Transactions*/}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
       </WrapperContent>
    )
}

export default CustomerDetails
