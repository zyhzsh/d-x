
import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


// const templateFactors = [
//   {
//     id:1,
//     name:'Learning Curve',
//     score:0,
//     weight: 30
//   },
//   {
//     id:2,
//     name:'Community',
//     score:0,
//     weight: 75
//   },
//   {
//     id:3,
//     name:'Persoanl learning goal',
//     score:0,
//     weight: 100
//   },
//   {
//     id:4,
//     name:'Job market',
//     score:0,
//     weight: 60
//   }
// ];

// const templateOptions = [
//   {
//     id:1,
//     name:'Node.js',
//     score:81,
//     factors: [
//       {
//         id:1,
//         name:'Learning Curve',
//         score:70,
//         weight: 30
//       },
//       {
//         id:2,
//         name:'Community',
//         score:90,
//         weight: 75
//       },
//       {
//         id:3,
//         name:'Persoanl learning goal',
//         score:80,
//         weight: 100
//       },
//       {
//         id:4,
//         name:'Job market',
//         score:80,
//         weight: 50
//       }
//     ],
//   },
//   {
//     id:2,
//     name:'Python web',
//     score:77,
//     factors: [
//       {
//         id:1,
//         name:'Learning Curve',
//         score:90,
//         weight: 30
//       },
//       {
//         id:2,
//         name:'Community',
//         score:90,
//         weight: 75
//       },
//       {
//         id:3,
//         name:'Persoanl learning goal',
//         score:60,
//         weight: 100
//       },
//       {
//         id:4,
//         name:'Job market',
//         score:80,
//         weight: 50
//       }
//     ],
//   },
//   {
//     id:3,
//     name:'.Net core',
//     score:80,
//     factors: [
//       {
//         id:1,
//         name:'Learning Curve',
//         score:70,
//         weight: 30
//       },
//       {
//         id:2,
//         name:'Community',
//         score:70,
//         weight: 75
//       },
//       {
//         id:3,
//         name:'Persoanl learning goal',
//         score:90,
//         weight: 100
//       },
//       {
//         id:4,
//         name:'Job market',
//         score:80,
//         weight: 50
//       }
//     ],
//   }
// ];

const templateDecisions = [{
  id:uuidv4(),
  name:"Template: Where should I go on holiday ?",
  description:"xxxx",
  options:[
         {
            "id":"c5fb378f-7370-4101-9045-ea1e2bec1cb7",
            "name":"Span",
            "score":65,
            "factors":[
               {
                  "id":"565c29b5-131a-4312-a296-21dc657bb720",
                  "name":"Please to every one ?",
                  "score":30,
                  "weight":20
               },
               {
                  "id":"e47a100d-31f8-4ff3-b80e-ccec5fc16014",
                  "name":"To see",
                  "score":40,
                  "weight":40
               },
               {
                  "id":"0d4b8c9b-bcc8-4b2f-b238-c0c1063e037d",
                  "name":"To do",
                  "score":20,
                  "weight":60
               },
               {
                  "id":"d6dcbebe-6856-4458-8f68-686ce35b5a78",
                  "name":"Weather",
                  "score":80,
                  "weight":80
               },
               {
                  "id":"9913c9ef-00d1-4a1d-a3a0-ab4026338378",
                  "name":"Cost",
                  "score":100,
                  "weight":100
               }
            ]
         },
         {
            "id":"4e62a725-aa94-4317-ad87-1967f2fcc6c1",
            "name":"Greece",
            "score":92,
            "factors":[
               {
                  "id":"565c29b5-131a-4312-a296-21dc657bb720",
                  "name":"Please to every one ?",
                  "score":80,
                  "weight":20
               },
               {
                  "id":"e47a100d-31f8-4ff3-b80e-ccec5fc16014",
                  "name":"To see",
                  "score":100,
                  "weight":40
               },
               {
                  "id":"0d4b8c9b-bcc8-4b2f-b238-c0c1063e037d",
                  "name":"To do",
                  "score":100,
                  "weight":60
               },
               {
                  "id":"d6dcbebe-6856-4458-8f68-686ce35b5a78",
                  "name":"Weather",
                  "score":100,
                  "weight":80
               },
               {
                  "id":"9913c9ef-00d1-4a1d-a3a0-ab4026338378",
                  "name":"Cost",
                  "score":80,
                  "weight":100
               }
            ]
         },
         {
            "id":"24090013-d979-4cc0-9dbc-7d0936231969",
            "name":"France",
            "score":64,
            "factors":[
               {
                  "id":"565c29b5-131a-4312-a296-21dc657bb720",
                  "name":"Please to every one ?",
                  "score":60,
                  "weight":20
               },
               {
                  "id":"e47a100d-31f8-4ff3-b80e-ccec5fc16014",
                  "name":"To see",
                  "score":60,
                  "weight":40
               },
               {
                  "id":"0d4b8c9b-bcc8-4b2f-b238-c0c1063e037d",
                  "name":"To do",
                  "score":80,
                  "weight":60
               },
               {
                  "id":"d6dcbebe-6856-4458-8f68-686ce35b5a78",
                  "name":"Weather",
                  "score":60,
                  "weight":80
               },
               {
                  "id":"9913c9ef-00d1-4a1d-a3a0-ab4026338378",
                  "name":"Cost",
                  "score":60,
                  "weight":100
               }
            ]
         },
         {
            "id":"6e344647-8206-4f8e-9f64-f36ced00e3e2",
            "name":"USA",
            "score":54,
            "factors":[
               {
                  "id":"565c29b5-131a-4312-a296-21dc657bb720",
                  "name":"Please to every one ?",
                  "score":100,
                  "weight":20
               },
               {
                  "id":"e47a100d-31f8-4ff3-b80e-ccec5fc16014",
                  "name":"To see",
                  "score":80,
                  "weight":40
               },
               {
                  "id":"0d4b8c9b-bcc8-4b2f-b238-c0c1063e037d",
                  "name":"To do",
                  "score":60,
                  "weight":60
               },
               {
                  "id":"d6dcbebe-6856-4458-8f68-686ce35b5a78",
                  "name":"Weather",
                  "score":40,
                  "weight":80
               },
               {
                  "id":"9913c9ef-00d1-4a1d-a3a0-ab4026338378",
                  "name":"Cost",
                  "score":40,
                  "weight":100
               }
            ]
         },
         {
            "id":"a8b91ac4-dde7-4763-8d8b-6a59a23558de",
            "name":"Australia",
            "score":24,
            "factors":[
               {
                  "id":"565c29b5-131a-4312-a296-21dc657bb720",
                  "name":"Please to every one ?",
                  "score":20,
                  "weight":20
               },
               {
                  "id":"e47a100d-31f8-4ff3-b80e-ccec5fc16014",
                  "name":"To see",
                  "score":20,
                  "weight":40
               },
               {
                  "id":"0d4b8c9b-bcc8-4b2f-b238-c0c1063e037d",
                  "name":"To do",
                  "score":40,
                  "weight":60
               },
               {
                  "id":"d6dcbebe-6856-4458-8f68-686ce35b5a78",
                  "name":"Weather",
                  "score":20,
                  "weight":80
               },
               {
                  "id":"9913c9ef-00d1-4a1d-a3a0-ab4026338378",
                  "name":"Cost",
                  "score":20,
                  "weight":100
               }
            ]
         }
  ],
  factors:[
         {
            "id":"9913c9ef-00d1-4a1d-a3a0-ab4026338378",
            "name":"Cost",
            "score":0,
            "weight":100
         },
         {
            "id":"d6dcbebe-6856-4458-8f68-686ce35b5a78",
            "name":"Weather",
            "score":0,
            "weight":80
         },
         {
            "id":"0d4b8c9b-bcc8-4b2f-b238-c0c1063e037d",
            "name":"To do",
            "score":0,
            "weight":60
         },
         {
            "id":"e47a100d-31f8-4ff3-b80e-ccec5fc16014",
            "name":"To see",
            "score":0,
            "weight":40
         },
         {
            "id":"565c29b5-131a-4312-a296-21dc657bb720",
            "name":"Please to every one ",
            "score":0,
            "weight":20
         }
  ] 
},
]

export const DecisionsContext = createContext()

const DecisionsContextProvider = (props) => {
    const [decisions, setDecisions] = useState([]);
    useEffect(()=>{
      let data = localStorage.getItem('decisions');
      if(!data) {
        localStorage.setItem('decisions',JSON.stringify(templateDecisions));
        setDecisions(templateDecisions);
      } 
      setDecisions(JSON.parse(localStorage.getItem('decisions')));
    },[])

    const Save=(decisions)=>{
      localStorage.setItem('decisions',JSON.stringify(decisions));
    }
    /* Decisions */
    const FindDecision = (decisionId) => decisions.find((d=>d.id === decisionId))
    const UpdateQuestionTitle = (decisionId,value) => {
      let decisionIndex = decisions.findIndex(x => x.id === decisionId);
      if(decisionIndex === -1) return ;
      let updatedDecision = {...decisions[decisionIndex],name:value};
      let updatedDecisions = [...decisions];
      updatedDecisions[decisionIndex]= updatedDecision;
      setDecisions(updatedDecisions);
      Save(updatedDecisions);
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
      Save(updatedDecisions)
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
      }else{
        newDecision.options = [...newDecision.options.map((o=>{
          return {...o, score:0}
        }))];
      }
   
      let newDecisions = [...decisions.map((d=>{
         if(d.id===decisionId) return newDecision;
         return d;
      }))]
      console.log('jisun',JSON.stringify(newDecisions))
      setDecisions(newDecisions);
      Save(newDecisions)
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
        factors:[...decision.factors,newFactor],
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
      Save(updatedDecisions);
    }

    const RemoveFactor = (decisionId,factorId) =>{
      let updatedDecisions = [...decisions.map(d=>{
        if(d.id===decisionId){
          return {
            ...d,
            factors:[...d.factors.filter((f=>f.id!==factorId))],
            options:[...d.options.map((o=>{
              return {...o,factors:[...o.factors.filter((f=>f.id!==factorId))]}
            }))]
          }
        }
        return d;
      })];
      console.log(updatedDecisions)
      // let factor = FindFactor(decisionId,factorId);
      // if(factor === null || factor==='undefined' ) return;
      // let decisionIndex = decisions.findIndex(x => x.id === decisionId);
      // if(decisionIndex === -1) return ;
      // let updatedDecision = {...decisions[decisionIndex]};
      // let updatedFactors = [...updatedDecision.factors.filter((factor=>{return factor.id!==factorId}))];
      // updatedDecision = {...decisions[decisionIndex], factors:updatedFactors, options:[...decisions[decisionIndex].options.map((o=>{return {...o,factors:updatedFactors}}))]};
      // let updatedDecisions = [...decisions];
      // updatedDecisions[decisionIndex]= updatedDecision;
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
    
    const DeleteDecision = (decisionId)=>{
      let updatedDecisions = [...decisions.filter((d=>d.id!==decisionId))];
      setDecisions(updatedDecisions);
      Save(updatedDecisions);
    }
    const AddNewDecision = ()=>{
      let updatedDecisions = [{...templateDecisions[0],id:uuidv4()},...decisions];
      setDecisions(updatedDecisions);
      Save(updatedDecisions);
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
    AddNewDecision,
    DeleteDecision
    }}>
        {props.children}
    </DecisionsContext.Provider>
}

export default DecisionsContextProvider