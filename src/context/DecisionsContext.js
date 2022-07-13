
import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


const factors = [
  {
    id:1,
    name:'Price',
    weight:10,
    score:45
  },
  {
    id:2,
    name:'Location',
    weight:40,
    score:52
  },
  {
    id:3,
    name:'Other',
    weight:20,
    score:60
  }
];


const options = [
  { 
    id:1,
    name:'China',
    score:0,
    factors:factors
  },
  {
    id:2,
    name:'Netherland',
    score:0,
    factors:factors
  },
  {
    id:3,
    name:'Koean',
    score:0,
    factors:factors
   }
];

const FetchedDecisions = [{
  id:1,
  name: 'Where to go on vacation ？',
  description:'xxxx',
  options:options,
  factors:factors,
},
]

export const DecisionsContext = createContext()

const DecisionsContextProvider = (props) => {
    const [decisions, setDecisions] = useState(FetchedDecisions);
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

    const FindDecisionTitle = (decisionId) => {
      const decision = FindDecision(decisionId);
      if(decision!=='undefined'){return decision.name;}
    }
   
    /* Options */
    const AddOption = (decisionId,value) => {
      let decisionIndex = decisions.findIndex(x => x.id === decisionId);
      if(decisionIndex === -1) return ;
      let updatedDecision = {...decisions[decisionIndex], options:[...decisions[decisionIndex].options,{id:uuidv4(),name:value,score:0,factors:decisions[decisionIndex].factors}]};
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
      let option = FindOption(decisionId,optionId);
      if(option === null || option==='undefined' ) return;
      let updatedFactor = {...option.factors.find(f=>f.id===factorId)};
      updatedFactor.score = value;
      let updatedFactors = [...option.factors.filter(f=>f.id!==factorId),updatedFactor]
      console.log(updatedFactors)
      let decisionIndex = decisions.findIndex(x => x.id === decisionId);
      if(decisionIndex === -1) return ;
      let decision = FindDecision(decisionId);
       decision.factors = [...updatedFactors];
       console.log(decision.options);


      //  console.log('filted decision',decision);

      //ReCalculateOptionScore(updatedDecisions,decisionId)
      // setDecisions(updatedDecisions);  
    }

    const ReCalculateOptionScore = (updatedDecisions,decisionId) =>{
      console.log('added',updatedDecisions)
      let decision = updatedDecisions.find((d=> d.id === decisionId));
      const totalWeights = decision.factors.reduce((prev,next)=>{
        prev += next.weight;
        return prev
      },0);
      decision.options = decision.options.map((o)=>{
        return {...o, score:o.factors.reduce((prev,next)=>{
          prev += Math.round(next.score * next.weight/totalWeights);
          return prev;
        },0)}
      });      
      setDecisions([decision]);
    }

    

     /* Factors */
     const FindFactor = (decisionId,factorId) =>{
      let decision = FindDecision(decisionId);
      if(decision) return decision.factors.find(o=>o.id===factorId);
      return null;
    }

    const AddFactor = (decisionId,value) => {
      let decisionIndex = decisions.findIndex(x => x.id === decisionId);
      if(decisionIndex === -1) return ;
      let updatedDecision = {...decisions[decisionIndex], factors:[...decisions[decisionIndex].factors,{id:uuidv4(),name:value,score:0, weight:0}]};
      updatedDecision.options =[...updatedDecision.options.map((option=>{
        return {...option,factors:updatedDecision.factors};
      }))];
      let updatedDecisions = [...decisions];
      updatedDecisions[decisionIndex]= updatedDecision;
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
      let factor = FindFactor(decisionId,factorId);
      if(factor === null || factor==='undefined' ) return;
      factor.weight = value;
      let decisionIndex = decisions.findIndex(x => x.id === decisionId);
      if(decisionIndex === -1) return ;
      let updatedDecision = {...decisions[decisionIndex]};
      let updatedFactors = [...updatedDecision.factors];
      let updatedFactorIndex = updatedFactors.findIndex(o=>o.id===factor.id);
      updatedFactors[updatedFactorIndex] = factor;
      updatedDecision = {...decisions[decisionIndex], factors:updatedFactors, options:[...decisions[decisionIndex].options.map((o=>{return {...o,factors:updatedFactors}}))]};
      let updatedDecisions = [...decisions];
      updatedDecisions[decisionIndex]= updatedDecision;
      ReCalculateOptionScore(updatedDecisions,decisionId);
    }



    return <DecisionsContext.Provider value={{ 
    decisions,
    UpdateQuestionTitle ,
    FindDecision,
    FindDecisionTitle,
    AddOption,
    UpdateOptionName,
    ReCalculateOptionScore,
    RemoveOption,
    FindFactor,
    AddFactor,
    UpdateFactorName,
    RemoveFactor,
    AdjustFactorImportance,
    UpdateFactorScore
    }}>
        {props.children}
    </DecisionsContext.Provider>
}

export default DecisionsContextProvider