import React,{useContext} from 'react'
import { Grid ,Typography} from '@mui/material'
import { DecisionsContext } from '../../context/DecisionsContext'
import { DataGrid } from '@mui/x-data-grid';


const DecisionBoard = ({decisionId,options}) => {
  const {UpdateFactorScore,FindDecision} = useContext(DecisionsContext);


  const column = [
    { 
      filed:'name',
      headerName: <Typography variant='h6'>Option</Typography>, 
      headerAlign:'center',
      align:'center',
      width: 300,
      renderCell:(params)=>{
        return <Typography variant='body1'><strong>{params.row.name}</strong></Typography>
      }
    },
    ...FindDecision(decisionId).factors.map((f=>{
      return {

        field:f.name,
        headerName: <Typography variant='h6'>{f.name}</Typography>,
        headerAlign:'center',
        align:'center',
        width: 200,
        editable: true,
        type: "number",
        renderCell:(params)=>{
        let factor = params.row.factors.find(fa=>fa.id===f.id);
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
      height: '290px',
      overflow: 'auto',
      gap: 0.5
      }} >
      <Grid item container justifyContent='center' alignItems='center'>
       <Grid item  container justifyContent='center' alignItems='center' xs={12} ><Typography variant="h4" >Scores</Typography></Grid>

      </Grid>
    {options.length !==0 ?
      <DataGrid
        getRowId={(row)=>row.id}
        rows={options}
        columns={column}
        hideFooter={true}
        onCellEditCommit={(values,event)=>{
           let value = values.value;
           if(typeof value !== 'number') return;
           if(value > 100) value = 100;
           if(value < 0) value = 0;
           let optionId = values.row.id;
           let factorName = values.field;
           let factorId = values.row.factors.find((f=>f.name===factorName)).id;
           UpdateFactorScore(decisionId,optionId,factorId,value);
        }}
      />:
    <Grid item  container justifyContent='center' alignItems='center' ><Typography variant="h6" >No</Typography></Grid>
    }
  </Grid>
  )
}

export default DecisionBoard