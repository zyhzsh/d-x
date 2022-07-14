import React,{useState,useContext} from 'react'
import { DecisionsContext } from '../../context/DecisionsContext';
import { Grid,Button,TextField} from '@mui/material'
import { v4 as uuidv4 } from 'uuid';

const Options = ({decisionId,options}) => {
  const {AddOption,UpdateOptionName,RemoveOption} = useContext(DecisionsContext);
  const [newOptionName,setNewOptionName] = useState('');
  const [onUpdateOptionId,setOnUpdateOptionId] = useState(null);

  const [editOptionName,setEditOptionName] = useState('');
  

  const AddNewOptionHandler = () => {
    if(newOptionName==='') return;
    AddOption(decisionId,newOptionName);
    setNewOptionName('');
  }
  const UpdateOptionHandler = () => {
    UpdateOptionName(decisionId,onUpdateOptionId,editOptionName);
    setTimeout(() => {
      setOnUpdateOptionId(null);
    }, 500);
  }
  const DeleteOptionHandler = () => {
    RemoveOption(decisionId,onUpdateOptionId)
  }


  // Option component
  const Option = (option,_) => (
     <Grid key={uuidv4()} item container sx={{ mt:1, height: '40px',border: '1px solid blue'}}>
      <Grid item xs={7} md={8}  sx={{  height: '40px' ,display: 'flex', justifyContent: 'center',alignItems:'center', border:'1px solid red'}}>
        <TextField 
            required
            defaultValue={option.name}
            variant="outlined"
            size='small' 
            fullWidth
            onChange={(e)=>setEditOptionName(e.target.value)}
            onFocus={(e)=>{setOnUpdateOptionId(option.id);setEditOptionName(e.target.value)}}
            onBlur={UpdateOptionHandler}
          />
          {onUpdateOptionId===option.id&&<Button onClick={DeleteOptionHandler}>delete</Button>}
      </Grid>
      <Grid item xs={5} md={4}  sx={{ height: '40px' ,display: 'flex',pl:'4px',justifyContent: 'center',alignItems:'center',border:'1px solid red'}}>{option.score}/100</Grid>
    </Grid>);

  return (
      <Grid item md={5.9} container sx={{  
        maxHeight: '300px',
        border: '1px solid green',
        padding: '.5rem 0 .5rem ' ,
        overflowY: 'auto',
        }} >
      {/* Header */}
      <Grid item container  sx={{ height: '20px'}}>
      <Grid item xs={7} md={8}  sx={{ pl:'4px',display: 'flex',
    flexDirection: 'column-reverse'}}>Options:</Grid>
        <Grid item xs={5} md={4}  sx={{ pl:'4px' ,display: 'flex',
    flexDirection: 'column-reverse'}}>Final Score:</Grid>
      </Grid>
      {/* Option */}
      {options!==[]&&options?.map((option,_)=>{
        return Option(option,_)
      })}
      <Grid item container  sx={{ mt:1, height: '40px'}}>
      <Grid container sx={{  height: '40px',border: '1px solid blue'}}>
        <Grid item xs={7} md={8}  sx={{  height: '40px' ,display: 'flex', justifyContent: 'center',alignItems:'center', border:'1px solid red'}}>
          <TextField 
            label="New options"
            value={newOptionName}
            variant="outlined"
            size='small' 
            fullWidth
            onChange={(e)=>setNewOptionName(e.target.value)}
          />
          </Grid>
      <Grid item xs={5} md={4}  sx={{  height: '40px' ,display: 'flex', justifyContent: 'center',alignItems:'center', border:'1px solid red'}}><Button onClick={AddNewOptionHandler} fullWidth variant='outlined'>Add</Button></Grid>
    </Grid>
      
      </Grid>
    </Grid>
  )
}

export default Options