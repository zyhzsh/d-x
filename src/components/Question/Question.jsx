import React,{useState,useRef,useContext} from 'react'
import { Grid ,TextField,Button,Divider,Typography,IconButton} from '@mui/material'
import { DecisionsContext } from '../../context/DecisionsContext';
import { useMediaQuery } from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
const Question = ({decisionId,question}) => {
  const isMidScreen = useMediaQuery(theme => theme.breakpoints.down("md"));
  const { UpdateQuestionTitle ,DeleteDecision} = useContext(DecisionsContext);
  const [isDisabledTitle,setIsDisabledTitle] = useState(false);
  const title = useRef();
  const UpdateQuestion = () =>{
    UpdateQuestionTitle(decisionId,title.current.value);
    setIsDisabledTitle(prev=>!prev);
  }
  return (
      <Grid 
          item 
          container
          alignItems= 'center'
          justifyContent='center'
          sx={{  
            width: '100%',
            maxHeight: '50px',
            gap:1
       }} 
       >
       <Grid item xs={8} sm={9} md={10} lg={10}>
         {isDisabledTitle&&<TextField 
          inputRef={title}
          disabled={!isDisabledTitle} 
          defaultValue={question}
          variant='outlined'
          size='small' 
          fullWidth/>}
          {!isDisabledTitle&&<Grid container justifyContent='center' alignItems='center'><Typography {...{ variant:`${isMidScreen?`body1`:"h6"}`}}>{question}</Typography></Grid>}
       </Grid>
       <Grid item container spacing={1} xs={2} md={1.5}>
          {isMidScreen?
            <><Grid item xs={6}> {!isDisabledTitle&&<IconButton fullWidth variant='outlined' onClick={()=>setIsDisabledTitle(prev=>!prev)}><EditIcon/></IconButton>}
         {isDisabledTitle&&<IconButton fullWidth variant='outlined' onClick={UpdateQuestion}><CheckIcon/></IconButton>}</Grid>
         <Grid item xs={6}><IconButton fullWidth variant='outlined' onClick={()=>{DeleteDecision(decisionId)}}><DeleteIcon/></IconButton></Grid></>
          :<><Grid item xs={6}> {!isDisabledTitle&&<Button fullWidth variant='outlined' onClick={()=>setIsDisabledTitle(prev=>!prev)}><EditIcon/></Button>}
         {isDisabledTitle&&<Button fullWidth variant='outlined' onClick={UpdateQuestion}><CheckIcon/></Button>}</Grid>
         <Grid item xs={6}><Button fullWidth variant='outlined' onClick={()=>{DeleteDecision(decisionId)}}><DeleteIcon/></Button></Grid></>}
       </Grid>
       <Grid item xs={12} >
          <Divider/>
       </Grid>
   </Grid>
  )
}

export default Question