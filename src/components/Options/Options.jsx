import React,{useState,useContext} from 'react'
import { DecisionsContext } from '../../context/DecisionsContext';
import { Grid,Button,TextField,IconButton,Typography, Divider} from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
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
  }
  const DeleteOptionHandler = (id) => {
    RemoveOption(decisionId,id)
  }

  // Option component
  const Option = (option,_) => (
     <Grid key={option.id} item container sx={{ mt:1, height: '40px'}}>
      <Grid item xs={7} md={8}  sx={{ p:1,  height: '40px' ,display: 'flex', justifyContent: 'center',alignItems:'center'}}>
        <TextField 
            required
            defaultValue={option.name}
            variant='outlined'
            size='small' 
            fullWidth
            onChange={(e)=>setEditOptionName(e.target.value)}
            onFocus={(e)=>{setOnUpdateOptionId(option.id);setEditOptionName(e.target.value)}}
            onBlur={UpdateOptionHandler}
          />
          <IconButton onClick={()=>DeleteOptionHandler(option.id)}><DeleteOutlineIcon color='primary'/></IconButton>
      </Grid>
      <Grid item xs={5} md={4}  sx={{ height: '40px' ,display: 'flex',pl:'4px',justifyContent: 'center',alignItems:'center'}}>{option.score}/100</Grid>
    </Grid>);
  return (
      <Grid item md={5.9} container sx={{  
        maxHeight: '300px',
        padding: '0 .5rem 0 .5rem ',
        overflowY: 'auto',
        }} >
      {/* Header */}
      <Grid item container  sx={{ height: '20px',m:'10px'}}>
        <Grid item container justifyContent='center' alignItems='center' xs={7} md={8}  sx={{ pl:'4px'}}>
          <Typography variant='body1' fontWeight="lg" ><strong>Options:</strong></Typography>
        </Grid>
        <Grid item container justifyContent='center' alignItems='center' xs={5} md={4}  sx={{ pl:'4px'}}>
        <Typography variant='body1' fontWeight="lg" ><strong>Final score:</strong></Typography>
          </Grid>
          <Grid item xs={12} >
              <Divider sx={{ml:'20px', mr:'20px'}}/>
          </Grid>
      </Grid>
      {/* Option */}
      {options!==[]&&options?.map((option,_)=>{
        return Option(option,_)
      })}
      {/* Add */}
      <Grid item container sx={{ mt:1, height: '40px'}}>
      <Grid item xs={7} md={8}  sx={{ p:1,  height: '40px' ,display: 'flex', justifyContent: 'center',alignItems:'center'}}>
      <TextField 
            label="New option"
            value={newOptionName}
            variant='outlined'
            size='small' 
            fullWidth
            onChange={(e)=>setNewOptionName(e.target.value)}
          />
      </Grid>
      <Grid item xs={5} md={4}  sx={{ height: '40px' ,display: 'flex',pl:'4px',justifyContent: 'center',alignItems:'center'}}><Button onClick={AddNewOptionHandler} fullWidth variant='outlined'><AddCircleOutlineIcon /></Button></Grid>      
      </Grid>
    </Grid>
  )
}

export default Options