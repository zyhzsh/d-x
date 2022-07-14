import React from 'react'
import { Grid } from '@mui/material'
import {Question,Options,Factors,DecisionBoard} from '../';

const Decision = ({decision}) => {

  return (
    <Grid 
      container
      justifyItems='center'
      alignItems='center'
      direction='column'
      flexWrap='nowrap'
      sx={{
        padding:'10px 0 10px 0',
        maxWidth:'80%',
        height: '600px',
        border: '1px solid #fff',
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
        direction='row'
        flexWrap='wrap'
        sx={{ 
          justifyContent: 'space-between',
        }} >
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