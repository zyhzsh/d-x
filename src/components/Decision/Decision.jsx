import React from 'react'
import { Grid } from '@mui/material'
import {Question,Options,Factors,DecisionBoard} from '../';

const Decision = ({decision}) => {

  return (
    <Grid 
      item
      xs={11}
      container
      justifyItems='center'
      alignItems='center'
      direction='column'
      flexWrap='nowrap'
      sx={{
        backgroundColor:'background.paper',
        padding:'10px 0 10px 0',
        mb:'10px',
        maxWidth:'80%',
        borderRadius: '10px',
        boxShadow: '10px 8px 0px -4px rgba(0,0,0,0.2)',
        overflow: 'auto',
        gap:1
      }}
    >
    {/* Header */}
    <Question decisionId={decision.id} question={decision.name}/>
    {/* Options and Factors */}
    <Grid item container
        justifyItems='center'
        alignItems='start'
        justifyContent='center'
        direction='row'
        flexWrap='wrap'
   >
      {/* Options */}
        <Options 
          decisionId={decision.id}
          options={decision.options}
        />
      {/* Factors */}
        <Factors 
          decisionId={decision.id}
          factors={decision.factors}
        />
    </Grid>
    {/* Score board */}
    <Grid item container
        justifyItems='center'
        alignItems='start'
        direction='row'
        flexWrap='wrap'
        sx={{ 
          justifyContent: 'space-between',
        }} >
       <DecisionBoard
          decisionId={decision.id}
          options={decision.options}
        />
    </Grid>
    </Grid>
  )
}

export default Decision