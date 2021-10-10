import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import CustomerMoneyTab from './CustomerMoneytab';
import FunctionsTab from './FunctionsTab';
import DefaulterTab from './DefaulterTab';
import WrapperContent from './WrapperComponent';

function DashboardContent() {
  return (
<WrapperContent >
            <Grid container spacing={3}>
               {/* Recent Deposits */}
               <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
               {/* Customer and Money Lending */}
               <Grid item xs={12} md={6} lg={6}>
              <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <CustomerMoneyTab/>
                  </Paper>
              </Grid>
             
              {/* Functions */}
              <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                 <FunctionsTab/>
                </Paper>
              </Grid>
              {/* DefaulterTab */}
            
                <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p:1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    overflowY:"scroll",
                  }}
                >
                 <DefaulterTab/>
                </Paper>
              </Grid>
              {/* Chart */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            </WrapperContent>
            
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}