import React,{useState,useRef,useContext} from 'react'
import { Grid ,TextField,Button,Divider,Typography} from '@mui/material'
import { DecisionsContext } from '../../context/DecisionsContext';
import { useMediaQuery } from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
const Question = ({decisionId,question}) => {
  const isMidScreen = useMediaQuery(theme => theme.breakpoints.down("md"));
  const { UpdateQuestionTitle } = useContext(DecisionsContext);
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
          variant="outlined"
          size='small' 
          fullWidth/>}
          {!isDisabledTitle&&<Grid container justifyContent='center' alignItems='center'><Typography {...{ variant:`${isMidScreen?`body1`:"h6"}`}}>{question}</Typography></Grid>}
       </Grid>
       <Grid item xs={2} md={1.5}>
         {!isDisabledTitle&&<Button variant="outlined" fullWidth onClick={()=>setIsDisabledTitle(prev=>!prev)}><EditIcon/></Button>}
         {isDisabledTitle&&<Button variant="outlined" fullWidth onClick={UpdateQuestion}><CheckIcon/></Button>}
       </Grid>
       <Grid item xs={12} >
          <Divider/>
       </Grid>
   </Grid>
  )
}

export default Question