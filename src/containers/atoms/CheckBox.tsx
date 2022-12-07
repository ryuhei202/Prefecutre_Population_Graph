import React from 'react';
import { Prefectures } from "../../types";


export const CheckBox = (props:any) => {

  const { prefectures } = props;
  console.log(prefectures?.length)



  return (
    <>
    {
    prefectures?.map((pre:Prefectures)=>{
      return (
        <React.Fragment key={pre.prefCode}> 
          <div>
            <h5>{pre.prefName}</h5>
          </div>
          
          </React.Fragment>
       
      );
    })
 
    }
    
    </>
  )
};
