import React from 'react';
import { useState } from 'react';
import { Prefectures } from "../../types";


export const CheckBox = (props:any) => {

  const { prefectures } = props;
  console.log(prefectures?.length);

  const [ selectedPrefecture, setSelectedPrefecture ] = useState<number>();

  const onClickCheckbox = (e:any) => {
    setSelectedPrefecture(
      e.target.value 
    );
  }
  
  console.log(selectedPrefecture);

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
