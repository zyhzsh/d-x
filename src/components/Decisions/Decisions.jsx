import { Grid } from '@mui/material';
import React,{ useContext } from 'react'
import { Decision } from '..';
import { DecisionsContext } from '../../context/DecisionsContext';
const Decisions = () => {
  const {decisions} = useContext(DecisionsContext);
  return (
    <Grid container justifyContent='center' alignItems='center' sx={{
      height: '100vh'
    }} >
    {
      decisions.map((decision,i)=>{
       return <Decision key={decision.id} decision={decision}/>
      })
    }
    </Grid>
  )
}

export default Decisions