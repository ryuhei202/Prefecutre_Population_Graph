import React, { useContext } from 'react';
import { useState } from 'react';
import { SelectedPrefectureContext } from '../../providers/SelectedPrefecturesProvider';
import { Prefectures } from "../../types";


export const CheckBox = (props:any) => {

  const { prefectures, onClickCheckbox } = props;


  return (
    <>
    <div className='checkbox-container'>
    {
    prefectures?.map((pre:Prefectures)=>{
      return (
        <React.Fragment key={pre.prefCode}> 
          <div className='checkbox' >
            <input type="checkbox" value={pre.prefCode} onClick={onClickCheckbox} />{pre.prefName}
          </div>
        </React.Fragment>
       
      );
    })
 
    }
    </div>
    
    
    </>
  )
};
