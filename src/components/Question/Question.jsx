import React,{useState,useRef,useContext} from 'react'
import { Grid ,TextField,Button} from '@mui/material'
import { DecisionsContext } from '../../context/DecisionsContext';
const Question = ({decisionId,question}) => {
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
       <Grid item xs={9} sm={9} md={10} lg={10}>
         <TextField 
          inputRef={title}
          disabled={!isDisabledTitle} 
          label="Question"
          defaultValue={question}
          variant="outlined"
          size='small' 
          fullWidth/>
       </Grid>
       <Grid item xs={2} md={1.5}>
         {!isDisabledTitle&&<Button variant="outlined" fullWidth onClick={()=>setIsDisabledTitle(prev=>!prev)}>Edit</Button>}
         {isDisabledTitle&&<Button variant="outlined" fullWidth onClick={UpdateQuestion}>Confirm</Button>}
       </Grid>
   </Grid>
  )
}

export default Question