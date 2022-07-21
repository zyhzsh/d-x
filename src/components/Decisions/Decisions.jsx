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
        What is decision-martix ?
      </Typography>
      <Typography variant='h6'>
      <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
      A decision matrix is a list of values in rows and columns that allows an analyst to systematically identify, analyze, and rate the performance of the relationship between sets of values and information.
      </Typography>
      <Typography variant='h4' sx={{textAlign:'center'}}>
        What is weighted decision-martix ?
      </Typography>
      <Typography variant='h6'>
      <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
      A weighted decision matrix should be used to reach an answer when you have a choice between a number of different options that provide a solution to your question or problem. Furthermore, you need to consider each option against a number of factors involved in the decision-making process. For example: when choosing a holiday, you have many potential destinations to choose between and must consider each against factors such as cost and the weather.
      </Typography>
      <Typography variant='h4' sx={{textAlign:'center'}}>
       When to use it ? 
      </Typography>
      <Typography variant='h6'>
      <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
      Some decisions are easy, and some are much more difficult because of the number of options to choose between and the factors involved in the decision. Do I eat an apple or an orange is a simple question to answer and we're guessing not many people would need a weighted decision matrix for that one, but what if you're deciding something much more complex? For example, do you need to pick a school for your child to attend or do you need to decide which software solution meets your employer's complex needs?      
      <br/>
      <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
      Use cases: <br/>
      <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
      - Multiple-criteria decision analysis <br/>
      <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
      - Belief decision matrix  <br/>
   
      </Typography>
      <Typography variant='h4' sx={{textAlign:'center'}}>
       Reference:
      </Typography>
      <Typography variant='body1'>
      <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
      Wikipedia, [Decision matrix](5th July 2022) Retrieved from:<a href='https://en.wikipedia.org/wiki/Decision_matrix'>https://en.wikipedia.org/wiki/Decision_matrix</a> <br/>  <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
      Wikipedia, [Evidential reasoning approach] (5th July 2022) Retrieved from:<a href='https://en.wikipedia.org/wiki/Evidential_reasoning_approach'>https://en.wikipedia.org/wiki/Evidential_reasoning_approach</a><br/>  <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
      Wikipedia, [When to use a Weighted Decision Matrix] (5th July 2022) Retrieved from:<a href='https://www.weighteddecision.com/when-to-use-a-weighted-decision-matrix/'>https://www.weighteddecision.com/when-to-use-a-weighted-decision-matrix/</a> <br/>  <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
      </Typography>
    </Grid>
}
export default Decisions