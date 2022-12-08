import React from 'react';
import { useState } from 'react';
import { Prefectures } from "../../types";


export const CheckBox = (props:any) => {

  const { prefectures } = props;
  console.log(prefectures?.length);

  const [ selectedPrefecture, setSelectedPrefecture ] = useState<Array<number>>([]);

  //選択されたcheckboxのvalueを取得し、selectedPrefectureに格納
  const onClickCheckbox = (e:any) => {
    setSelectedPrefecture(     
      [...selectedPrefecture, e.target.value ]
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
