import React, { useContext } from 'react'
import { Grid, Typography, Slider } from '@mui/material'
import { DecisionsContext } from '../../context/DecisionsContext'
import { DataGrid } from '@mui/x-data-grid';


const DecisionBoard = ({ decisionId, options }) => {
  const { UpdateFactorScore, FindDecision } = useContext(DecisionsContext);


  const column = [
    {
      filed: 'name',
      headerName: <Typography variant='h6'>Option</Typography>,
      headerAlign: 'center',
      align: 'center',
      width: 300,
      flex: 1,
      renderCell: (params) => {
        return <Typography variant='body1'><strong>{params.row.name}</strong></Typography>
      }
    },
    ...FindDecision(decisionId).factors.map((f => {
      return {
        field: f.name,
        headerName: <Typography variant='h6'>{f.name}</Typography>,
        headerAlign: 'center',
        align: 'center',
        width: 200,
        flex: 1,
        editable: true,
        type: "number",
        renderCell: (params) => {
          let factor = params.row.factors.find(fa => fa.id === f.id);
          let optionId = params.row.id;
          // return <Slider
          //   key={`slider-${'sdd'}`}
          //   size="small"
          //   sx={{ ml: 1, width: '70%' }}
          //   // TODO: Fix Error :MUI: A component is changing the default value state of an uncontrolled Slider after being initialized. To suppress this warning opt to use a controlled Slider.
          //   defaultValue={factor.weight}
          //   valueLabelDisplay="auto"
          //   // onChange={(e)=>processChange(factor.id,e.target.value)}
          //   onChangeCommitted={(_, value) => {
          //     UpdateFactorScore(decisionId, optionId, factor.id, value);
          //   }
          //   }
          // />
          return <Typography variant='body1'><strong>{factor.score}</strong></Typography>;
        }
      }
    }))
  ];


  return (
    <Grid
      container
      flexDirection='column'
      item
      sx={{
        height: '700px',
        overflow: 'auto',
        gap: 0.5
      }} >
      <Grid item container justifyContent='center' alignItems='center'>
        <Grid item container justifyContent='center' alignItems='center' xs={12} ><Typography variant="h6" >Scores</Typography></Grid>
      </Grid>
      {options.length !== 0 ?
        <DataGrid
          rowHeight={100}
          columns={column}
          rows={options}
          hideFooter={true}
          onCellEditCommit={(values, _) => {
            let value = values.value;
            if (typeof value !== 'number') return;
            if (value > 100) value = 100;
            if (value < 0) value = 0;
            let optionId = values.row.id;
            let factorName = values.field;
            let factorId = values.row.factors.find((f => f.name === factorName)).id;
            UpdateFactorScore(decisionId, optionId, factorId, value);
          }}
        /> :
        <Grid item container justifyContent='center' alignItems='center' ><Typography variant="body1" >No content</Typography></Grid>
      }
    </Grid>
  )
}

export default DecisionBoard