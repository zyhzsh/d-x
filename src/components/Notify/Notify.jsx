import React,{useContext} from 'react'
import { DecisionsContext } from '../../context/DecisionsContext'

const Notify = () => {
  const {notification} = useContext(DecisionsContext);
  return (
    <>
    {notification}

    </>
  )
}

export default Notify