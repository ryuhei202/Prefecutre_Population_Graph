
import React, { useRef } from 'react';

import { useState } from 'react';
import { SelectedPrefectureContext } from '../../providers/SelectedPrefecturesProvider';
import { Prefectures } from "../../types";


export const CheckBox = (props:any) => {

  const { prefectures, onChange, checked, setChecked } = props;


  return (
    <>
    <div className='checkbox-container'>
    {
    prefectures?.map((pre:Prefectures)=>{
      return (
        <React.Fragment key={pre.prefCode} > 
          <div className='checkbox' >
              <input id={`${pre.prefCode}`} type="checkbox" value={pre.prefCode} onChange={onChange}  />{pre.prefName}
          </div>
        </React.Fragment>
       
      );
    })
 
    }
    </div>
    
    
    </>
  )
};
