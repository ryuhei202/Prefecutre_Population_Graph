import React, { useRef } from 'react';
import { useState } from 'react';
import { Prefectures } from "../../types";


export const CheckBox = (props:any) => {

  const { prefectures, onChange } = props;

  return (
    <>
    <div className='checkbox-container'>
    {
    prefectures?.map((pre:Prefectures)=>{
      return (
        <React.Fragment key={pre.prefCode} > 
          <div className='checkbox' >
              <input id={`${pre.prefCode}`} type="checkbox" value={pre.prefCode} onChange={(e) => onChange(pre.prefName, e.target.value, e.target.checked)}  />{pre.prefName}
          </div>
        </React.Fragment>
       
      );
    })
 
    }
    </div>
    
    
    </>
  )
};
