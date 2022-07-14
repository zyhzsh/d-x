import React,{useState,useContext} from 'react'
import { DecisionsContext } from '../../context/DecisionsContext';
import { Grid,Button,TextField,Slider} from '@mui/material'
import { v4 as uuidv4 } from 'uuid';

const Factors = ({decisionId,factors}) => {
  const {AddFactor,UpdateFactorName,RemoveFactor,AdjustFactorImportance} = useContext(DecisionsContext);
  const [newFactorName,setNewFactorName] = useState('');
  const [onUpdateOptionId,setOnUpdateOptionId] = useState(null);
  const [editFactorName,setEditFactorName] = useState('');
  
  const AddNewFactorHandler = () => {
    if(newFactorName==='') return;
    AddFactor(decisionId,newFactorName);
    setNewFactorName('');
  }
  const UpdateFactorHandler = () => {
    UpdateFactorName(decisionId,onUpdateOptionId,editFactorName);
    setTimeout(() => {
      setOnUpdateOptionId(null);
    }, 300);
  }
  const DeleteFactorHandler = () => {
    RemoveFactor(decisionId,onUpdateOptionId)
  }
  const debounce=(func, timeout = 800)=>{
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
const saveInput=(factorId,value)=>{
    AdjustFactorImportance(decisionId,factorId,value);
    console.log(decisionId,factorId,value)
}
const processChange = debounce((factorId,value) => saveInput(factorId,value));



  // Option component
  const Factor = (factor,_) => (
     <Grid key={uuidv4()} item container sx={{ mt:1, height: '40px',border: '1px solid blue'}}>
      <Grid item xs={7} md={8}  sx={{  height: '40px' ,display: 'flex', justifyContent: 'center',alignItems:'center', border:'1px solid red'}}>
        <TextField 
            required
            defaultValue={factor.name}
            variant="outlined"
            size='small' 
            fullWidth
            onChange={(e)=>setEditFactorName(e.target.value)}
            onFocus={(e)=>{setOnUpdateOptionId(factor.id);setEditFactorName(e.target.value)}}
            onBlur={UpdateFactorHandler}
          />
          {onUpdateOptionId===factor.id&&<Button onClick={DeleteFactorHandler}>delete</Button>}
      </Grid>
      <Grid item xs={5} md={4}  sx={{ height: '40px' ,display: 'flex',pl:'4px',justifyContent: 'center',alignItems:'center',border:'1px solid red'}}>
        <span style={{width:'30px'}}>{factor.weight}</span> 
        <Slider 
          size="small" 
          sx={{ml:1, width:'70%'}} 
          // TODO: Fix Error :MUI: A component is changing the default value state of an uncontrolled Slider after being initialized. To suppress this warning opt to use a controlled Slider.
          defaultValue={factor.weight} 
          valueLabelDisplay="auto"
          onChange={(e)=>processChange(factor.id,e.target.value)}
         // onChangeCommitted={(_,value)=>AdjustFactorImportance(decisionId,factor.id,value)}
         />
      </Grid>
    </Grid>);

  return (
      <Grid item md={5.9} container sx={{  
        maxHeight: '300px',
        border: '1px solid green',
        padding: '.5rem 0 .5rem ' ,
        overflowY: 'auto',
        overflowX: 'hidden',
        }} >
      {/* Header */}
      <Grid item container  sx={{ height: '20px'}}>
      <Grid item xs={7} md={8}  sx={{ pl:'4px',display: 'flex',
    flexDirection: 'column-reverse'}}>Factors:</Grid>
        <Grid item xs={5} md={4}  sx={{ pl:'4px' ,display: 'flex',
    flexDirection: 'column-reverse'}}>Importance:</Grid>
      </Grid>
      {/* Option */}
      {factors!==[]&&factors.map((factor,_)=>{
        return Factor(factor,_)
      })}
      <Grid item container  sx={{ mt:1, height: '40px'}}>
      <Grid container sx={{  height: '40px',border: '1px solid blue'}}>
        <Grid item xs={7} md={8}  sx={{  height: '40px' ,display: 'flex', justifyContent: 'center',alignItems:'center', border:'1px solid red'}}>
          <TextField 
            label="New options"
            value={newFactorName}
            variant="outlined"
            size='small' 
            fullWidth
            onChange={(e)=>setNewFactorName(e.target.value)}
          />
          </Grid>
      <Grid item xs={5} md={4}  sx={{  height: '40px' ,display: 'flex', justifyContent: 'center',alignItems:'center', border:'1px solid red'}}><Button onClick={AddNewFactorHandler} fullWidth variant='outlined'>Add</Button></Grid>
    </Grid>
      
      </Grid>
    </Grid>
  )
}

export default Factors