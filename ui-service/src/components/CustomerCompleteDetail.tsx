import React from 'react'
import TextField from '@mui/material/TextField';
import  {Autocomplete}  from '@mui/material';
import  {Stack}  from '@mui/material';
import { Label } from '@mui/icons-material';
function CustomerCompleteDetail() {
    return (
        <>
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={[{
            label: 'Star Wars: Episode V - The Empire Strikes Back',
            year: 1980,
          },
          { label: 'Forrest Gump', year: 1994 },
          { label: 'Inception', year: 2010 },
          {
            label: 'The Lord of the Rings: The Two Towers',
            year: 2002,
          },
          { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
          { label: 'Goodfellas', year: 1990 },
          { label: 'The Matrix', year: 1999 },
          { label: 'Seven Samurai', year: 1954 },
          {
            label: 'Star Wars: Episode IV - A New Hope',
            year: 1977,
          },
          { label: 'City of God', year: 2002 },
          { label: 'Se7en', year: 1995 },
          { label: 'The Silence of the Lambs', year: 1991 },
          { label: "It's a Wonderful Life", year: 1946 },
          { label: 'Life Is Beautiful', year: 1997 },
          { label: 'The Usual Suspects', year: 1995 },
          { label: 'Léon: The Professional', year: 1994 },
          { label: 'Spirited Away', year: 2001 },
          { label: 'Saving Private Ryan', year: 1998 },
          { label: 'Once Upon a Time in the West', year: 1968 },
          { label: 'American History X', year: 1998 },
          { label: 'Interstellar', year: 2014 },
          { label: 'Casablanca', year: 1942 },
          { label: 'City Lights', year: 1931 },
          { label: 'Psycho', year: 1960 },
          { label: 'The Green Mile', year: 1999 },
          { label: 'The Intouchables', year: 2011 },
          { label: 'Modern Times', year: 1936 },
          { label: 'Raiders of the Lost Ark', year: 1981 },
          { label: 'Rear Window', year: 1954 },
          { label: 'The Pianist', year: 2002 },
          { label: 'The Departed', year: 2006 },
          { label: 'Terminator 2: Judgment Day', year: 1991 },
          { label: 'Back to the Future', year: 1985 },
          { label: 'Whiplash', year: 2014 },
          { label: 'Gladiator', year: 2000 },
          { label: 'Memento', year: 2000 },
          { label: 'The Prestige', year: 2006 },
          { label: 'The Lion King', year: 1994 },
          { label: 'Apocalypse Now', year: 1979 },
          { label: 'Alien', year: 1979 },]}
        sx={{ width: "auto", minWidth:"200px" }}
        renderInput={(params) => <TextField {...params} label="Select Customer" />}
            />
          
        <ul >
              <li>
                <strong>Name:</strong> Jatin Jain
              </li>
              <li>
                <strong>Contact:</strong> 122425563
              </li>
              <li>
                <strong>Address:</strong> Gokuldham society powder gali Andheri east
              </li>
              <li>
                <strong>Linked Account:</strong> Jethalal Gada
              </li>
              <li >
                <strong>Remaining Balance:</strong> 1000000
              </li>
              <li >
                <strong>Money Balance:</strong> 150000
              </li>
              </ul>
        
        </>
    )
}

export default CustomerCompleteDetail
