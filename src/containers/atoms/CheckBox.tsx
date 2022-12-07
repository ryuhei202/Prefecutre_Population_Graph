import React from 'react';
import { Prefectures } from "../../types";


export const CheckBox = (props:any) => {

  const { prefectures } = props;
  console.log(prefectures?.length)



  return (
    <>
    <div className='checkbox-container'>
    {
    prefectures?.map((pre:Prefectures)=>{
      return (
        <React.Fragment key={pre.prefCode}> 
          <div className='checkbox' >
            <input type="checkbox" value={pre.prefCode} />{pre.prefName}
          </div>
          
          </React.Fragment>
       
      );
    })
 
    }
    </div>
    
    
    </>
  )
};
