import React,{useState,useContext} from 'react'
import { DecisionsContext } from '../../context/DecisionsContext';
import { Grid,Button,TextField,IconButton,Typography,Slider,Divider} from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
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
    }, 200);
  }
  const DeleteFactorHandler = (id) => {
    RemoveFactor(decisionId,id)
  }
//   const debounce=(func, timeout = 800)=>{
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => { func.apply(this, args); }, timeout);
//   };
// }
// const saveInput=(factorId,value)=>{
//     AdjustFactorImportance(decisionId,factorId,value);
// }

// const processChange = debounce((factorId,value) => saveInput(factorId,value));

  // Option component
  const Factor = (factor,_) => (
    <Grid key={factor.id} item container sx={{ mt:1, height: '40px'}}>
      <Grid item xs={7} md={8}  sx={{ p:1,  height: '40px' ,display: 'flex', justifyContent: 'center',alignItems:'center'}}>
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
        <IconButton onClick={()=>DeleteFactorHandler(factor.id)}><DeleteOutlineIcon color='primary'/></IconButton>
      </Grid>
      <Grid item xs={5} md={4}  sx={{ height: '40px' ,display: 'flex',pl:'4px',justifyContent: 'center',alignItems:'center'}}>
        <span style={{width:'30px'}}>{factor.weight}</span> 
        <Slider 
          key={`slider-${'sdd'}`}
          size="small" 
          sx={{ml:1, width:'70%'}} 
          // TODO: Fix Error :MUI: A component is changing the default value state of an uncontrolled Slider after being initialized. To suppress this warning opt to use a controlled Slider.
          defaultValue={factor.weight} 
          valueLabelDisplay="auto"
          // onChange={(e)=>processChange(factor.id,e.target.value)}
         onChangeCommitted={(_,value)=>AdjustFactorImportance(decisionId,factor.id,value)}
         />
      </Grid>
    </Grid>);

  return (
      <Grid item md={5.9} container sx={{  
        maxHeight: '300px',
        padding: '0 .5rem 0 .5rem ',
        overflowY: 'auto',
        overflowX: 'hidden',
        }} >
        
        {/* Header */}
        <Grid item container  sx={{ height: '20px',m:'10px'}}>
        <Grid item container justifyContent='center' alignItems='center' xs={7} md={8}  sx={{ pl:'4px'}}>
          <Typography variant='body1' fontWeight="lg" ><strong>Factors:</strong></Typography>
        </Grid>
        <Grid item container justifyContent='center' alignItems='center' xs={5} md={4}  sx={{ pl:'4px'}}>
        <Typography variant='body1' fontWeight="lg" ><strong>Importance:</strong></Typography>
          </Grid>
          <Grid item xs={12} >
              <Divider sx={{ml:'20px', mr:'20px'}}/>
          </Grid>
      </Grid>
      {/* Factors */}
      {factors!==[]&&factors.map((factor,_)=>{
        return Factor(factor,_)
      })}
          {/* Add */}
          <Grid item container sx={{ mt:1, height: '40px'}}>
      <Grid item xs={6.9} md={7.9}  sx={{ p:1,  height: '40px' ,display: 'flex', justifyContent: 'center',alignItems:'center'}}>
      <TextField 
            label="New option"
            value={newFactorName}
            variant="outlined"
            size='small' 
            fullWidth
            onChange={(e)=>setNewFactorName(e.target.value)}
          />
      </Grid>
      <Grid item xs={4.9} md={3.9}  sx={{ height: '40px' ,display: 'flex',pl:'4px',justifyContent: 'center',alignItems:'center'}}><Button onClick={AddNewFactorHandler} fullWidth variant='outlined'><AddCircleOutlineIcon /></Button></Grid>      
      </Grid>
    </Grid>
  )
}

export default Factors