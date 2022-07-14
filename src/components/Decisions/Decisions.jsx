import React,{ useContext } from 'react'
import { Decision } from '..';
import { DecisionsContext } from '../../context/DecisionsContext';
const Decisions = () => {
  const {decisions} = useContext(DecisionsContext);
  return (
    <>
    {
      decisions.map((decision,i)=>{
       return <Decision key={decision.id} decision={decision}/>
      })
    }
    </>
  )
}

export default Decisions