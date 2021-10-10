import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Title from './Title';
export default function FunctionsTab() {
  return (
    <React.Fragment>
         <Title>Functions</Title>
        <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
        >
            <Stack
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            >
                <Button style={{width:"200px"}}  variant="contained">Sell Gold</Button>
                <Button style={{width:"200px"}}  variant="contained">Buy Back</Button>
                <Button style={{width:"200px"}}  variant="contained">Sell Silver</Button>
            </Stack>
            <Stack
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            >
                <Button style={{width:"200px"}}  variant="contained">Add Inventory</Button>
                <Button style={{width:"200px"}}  variant="contained">+ Extra Income</Button>
                <Button style={{width:"200px"}}  variant="contained">Add Expense</Button>
            </Stack>
        </Stack>
    </React.Fragment>
  );
}