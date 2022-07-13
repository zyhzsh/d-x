import React,{ useContext, useEffect } from 'react'
import { Decision } from '..';
import { DecisionsContext } from '../../context/DecisionsContext';
import {Box} from '@mui/material'
const Decisions = () => {
  const {decisions} = useContext(DecisionsContext);
  return (
    <>
    {
      decisions.map((decision,i)=>{
       return <Decision key={i} decision={decision}/>
      })
    }
    </>
  )
}

export default Decisions