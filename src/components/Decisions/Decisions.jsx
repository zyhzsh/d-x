import { Grid ,Button,Typography} from '@mui/material';
import React,{ useContext } from 'react'
import { Decision,SocialLinks } from '..';
import { DecisionsContext } from '../../context/DecisionsContext';
const Decisions = () => {
  const {decisions,AddNewDecision} = useContext(DecisionsContext);
  return (
    <Grid container justifyContent='center' sx={{
    }} >
    <Grid item xs={11} sx={{pt:'10px', pb:'10px'}}><Button variant='contained' fullWidth onClick={AddNewDecision}>Create New Decision</Button></Grid>
    {decisions.length===0?Introduction():""}
    {
      decisions.map((decision,i)=>{
       return <Decision key={decision.id} decision={decision}/>
      })
    }
    <SocialLinks/>
    </Grid>
  )
}
const Introduction = ()=>{
  return <Grid item xs={11}>
      <Typography variant='h4' sx={{textAlign:'center'}}>
        What is decision martix ? 
      </Typography>
      <Typography variant='h6'>
      <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography>
      <Typography variant='h4' sx={{textAlign:'center'}}>
       When to use it ? 
      </Typography>
      <Typography variant='h6'>
      <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography>
      <Typography variant='h4' sx={{textAlign:'center'}}>
       How to use it ? 
      </Typography>
      <Typography variant='h6'>
      <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography>
      <Typography variant='h4' sx={{textAlign:'center'}}>
       Reference:
      </Typography>
      <Typography variant='h6'>
      <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography>
    </Grid>
}
export default Decisions