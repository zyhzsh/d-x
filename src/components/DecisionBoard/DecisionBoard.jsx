import React,{useContext} from 'react'
import { Grid } from '@mui/material'
import { DecisionsContext } from '../../context/DecisionsContext'
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';


const DecisionBoard = ({decisionId,options}) => {
  const {UpdateFactorScore,FindDecision} = useContext(DecisionsContext);

  const column = [
    { 
      field: "factor", 
      headerName: "", 
      width: 300,
      valueGetter:(params)=>{
        return params.row.name;
      }
    },
    ...FindDecision(decisionId).factors.map((f=>{
      return {
        field:f.name,
        headerName:f.name,
        width: 200,
        editable: true,
        type: "number",
        valueGetter:(params)=>{
        let factor = params.row.factors.find(fa=>fa.id===f.id);
        return factor.score;
      }
      }
    }))
  ];

  
  return (
    <Grid container 
    item 
     sx={{  
      border: '1px solid #fff',
      height: '290px',
      overflow: 'auto',
      gap: 0.5
      }} >
    {options.length !==0 && <DataGrid
        getRowId={(row)=>row.id}
        rows={options}
        columns={column}
        hideFooter={true}
        onCellEditCommit={(values,event)=>{
           let value = values.value;
           let optionId = values.row.id;
           let factorName = values.field;
           let factorId = values.row.factors.find((f=>f.name===factorName)).id;
           UpdateFactorScore(decisionId,optionId,factorId,value);
        }}
      />}
  </Grid>
  )
}

export default DecisionBoard