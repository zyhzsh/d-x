
import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const FetchedDecisions = [{
  id:uuidv4(),
  name: 'Your question here',
  description:'xxxx',
  options:[],
  factors:[],
},
]

export const DecisionsContext = createContext()

const DecisionsContextProvider = (props) => {
    const [decisions, setDecisions] = useState([]);

    useEffect(()=>{
      setDecisions(FetchedDecisions);
    },[])

    /* Decisions */
    const FindDecision = (decisionId) => decisions.find((d=>d.id === decisionId))
    const UpdateQuestionTitle = (decisionId,value) => {
      let decisionIndex = decisions.findIndex(x => x.id === decisionId);
      if(decisionIndex === -1) return ;
      let updatedDecision = {...decisions[decisionIndex],name:value};
      let updatedDecisions = [...decisions];
      updatedDecisions[decisionIndex]= updatedDecision;
      setDecisions(updatedDecisions);
  };
  
    /* Options */
    const FindOption = (decisionId,optionId) =>{
      let decision = FindDecision(decisionId);
      if(decision) return decision.options.find(o=>o.id===optionId);
      return null;
    }


    /* Add Option */
    const AddOption = (decisionId,value) => {
      let decisionIndex = decisions.findIndex(x => x.id === decisionId);
      if(decisionIndex === -1) return ;
      let factors = [...decisions[decisionIndex].factors.map(f=>{return {...f,score:0}})];
      let updatedDecision = {...decisions[decisionIndex], options:[...decisions[decisionIndex].options,{id:uuidv4(),name:value,score:0,factors:factors}]};
      let updatedDecisions = [...decisions];
      updatedDecisions[decisionIndex]= updatedDecision;
      ReCalculateOptionScore(updatedDecisions,decisionId);
    }

    const UpdateOptionName = (decisionId,optionId,value) => {
      let option = FindOption(decisionId,optionId);
      if(option === null || option==='undefined' ) return;
      option.name = value;
      let decisionIndex = decisions.findIndex(x => x.id === decisionId);
      if(decisionIndex === -1) return ;
      let updatedDecision = {...decisions[decisionIndex]};
      let updatedOptions = [...updatedDecision.options];
      let updatedOptionIndex = updatedOptions.findIndex(o=>o.id===option.id);
      updatedOptions[updatedOptionIndex] = option;
      updatedDecision = {...decisions[decisionIndex], options:updatedOptions};
      let updatedDecisions = [...decisions];
      updatedDecisions[decisionIndex]= updatedDecision;
      setDecisions(updatedDecisions);  
    }

    const RemoveOption = (decisionId,optionId) =>{
      let option = FindOption(decisionId,optionId);
      if(option === null || option==='undefined' ) return;
      let decisionIndex = decisions.findIndex(x => x.id === decisionId);
      if(decisionIndex === -1) return ;
      let updatedDecision = {...decisions[decisionIndex]};
      let updatedOptions = [...updatedDecision.options.filter((option=>{return option.id!==optionId}))];
      updatedDecision = {...decisions[decisionIndex], options:updatedOptions};
      let updatedDecisions = [...decisions];
      updatedDecisions[decisionIndex]= updatedDecision;
      ReCalculateOptionScore(updatedDecisions,decisionId);
    }
    
    const UpdateFactorScore = (decisionId,optionId,factorId,value)=>{
      let decision = FindDecision(decisionId);
      //Update options 
      let newOptions = [...decision.options];
      newOptions = newOptions.map((o=>{
        return {...o,factors:[...o.factors.map((f=>{
          if(f.id===factorId&&o.id===optionId) return {...f,score:value}
          return f;
        }))]}
      }))
      //Update decision
      let updatedDecision = {
        ...decision,
        options:[...newOptions]
      }
      let updatedDecisions = [...decisions.map((d=>{
        if(d.id===decisionId) return updatedDecision;
        return d;
      }))]
      ReCalculateOptionScore(updatedDecisions,decisionId);
    }

    const ReCalculateOptionScore = (updatedDecisions,decisionId) =>{
      let newDecision = {...updatedDecisions.find((d=> d.id === decisionId))};
      const totalWeights = newDecision.factors.reduce((prev,next)=>{
        prev += next.weight;
        return prev
      },0);
      if(totalWeights!==0){
        newDecision.options = [...newDecision.options.map((o=>{
          let score = 0;
          o.factors.forEach(f => {
            score += Math.round(f.score * f.weight/totalWeights);
          });

          return {...o, score}
        }))];
      }
   
      let newDecisions = [...decisions.map((d=>{
         if(d.id===decisionId) return newDecision;
         return d;
      }))]
      setDecisions(newDecisions);
    }

     /* Factors */
     const FindFactor = (decisionId,factorId) =>{
      let decision = FindDecision(decisionId);
      if(decision) return decision.factors.find(o=>o.id===factorId);
      return null;
    }

    const AddFactor = (decisionId,value) => {
      let decision  = FindDecision(decisionId);
      let newFactor = {id:uuidv4(),name:value,score:0, weight:0};
      let updatedDecision = {
        ...decision,
        factors:[newFactor,...decision.factors],
        options:[...decision.options.map((o=>{return {...o,factors:[newFactor,...o.factors]}}))]
      }
      let updatedDecisions = [...decisions.filter(d=>d.id!==decisionId),updatedDecision];
      ReCalculateOptionScore(updatedDecisions,decisionId);
    }

    const UpdateFactorName = (decisionId,factorId,value) => {
      let factor = FindFactor(decisionId,factorId);
      if(factor === null || factor==='undefined' ) return;
      factor.name = value;
      let decisionIndex = decisions.findIndex(x => x.id === decisionId);
      if(decisionIndex === -1) return ;
      let updatedDecision = {...decisions[decisionIndex]};
      let updatedFactors = [...updatedDecision.factors];
      let updatedFactorIndex = updatedFactors.findIndex(o=>o.id===factor.id);
      updatedFactors[updatedFactorIndex] = factor;
      updatedDecision = {...decisions[decisionIndex], factors:updatedFactors};
      let updatedDecisions = [...decisions];
      updatedDecisions[decisionIndex]= updatedDecision;
      setDecisions(updatedDecisions);  
    }

    const RemoveFactor = (decisionId,factorId) =>{
      let factor = FindFactor(decisionId,factorId);
      if(factor === null || factor==='undefined' ) return;
      let decisionIndex = decisions.findIndex(x => x.id === decisionId);
      if(decisionIndex === -1) return ;
      let updatedDecision = {...decisions[decisionIndex]};
      let updatedFactors = [...updatedDecision.factors.filter((factor=>{return factor.id!==factorId}))];
      updatedDecision = {...decisions[decisionIndex], factors:updatedFactors, options:[...decisions[decisionIndex].options.map((o=>{return {...o,factors:updatedFactors}}))]};
      let updatedDecisions = [...decisions];
      updatedDecisions[decisionIndex]= updatedDecision;
      ReCalculateOptionScore(updatedDecisions,decisionId);
    }
    
    const AdjustFactorImportance = (decisionId,factorId,value) =>{
      let decision = FindDecision(decisionId);
      //Update factors 
      let newFactors = [...decision.factors];
      newFactors = newFactors.map((f=>{
        if(f.id===factorId) return {...f,weight:value}
        return f;
      }))
      //Update options 
      let newOptions = [...decision.options];
      newOptions = newOptions.map((o=>{
        return {...o,factors:[...o.factors.map((f=>{
          if(f.id===factorId) return {...f,weight:value}
          return f;
        }))]}
      }))
      //Update decision
      let updatedDecision = {
        ...decision,
        factors:[...newFactors],
        options:[...newOptions]
      }
      let updatedDecisions = [...decisions.map((d=>{
        if(d.id===decisionId) return updatedDecision;
        return d;
      }))]

      ReCalculateOptionScore(updatedDecisions,decisionId);
    }
    
    return <DecisionsContext.Provider value={{ 
    decisions,
    UpdateQuestionTitle ,
    FindDecision,
    AddOption,
    UpdateOptionName,
    ReCalculateOptionScore,
    RemoveOption,
    FindFactor,
    AddFactor,
    UpdateFactorName,
    RemoveFactor,
    AdjustFactorImportance,
    UpdateFactorScore,
    }}>
        {props.children}
    </DecisionsContext.Provider>
}

export default DecisionsContextProvider