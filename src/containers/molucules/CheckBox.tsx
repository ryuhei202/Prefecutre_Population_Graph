
import React from 'react';
import { Prefectures } from "../../types";

type Props = {
  prefectures:Prefectures[] | undefined;
  onChange: (name:string, value:number,checked:boolean) => void;
}

export const CheckBox: React.FC<Props> = (props) => {

  const { prefectures, onChange } = props;


  return (
    <>
    <div className='checkbox-container'>
    {
    prefectures?.map((pre:Prefectures)=>{
      return (
        <React.Fragment key={pre.prefCode} > 
          <div className='checkbox' >
              <input id={`${pre.prefCode}`} type="checkbox" value={pre.prefCode} onChange={(e) => onChange(pre.prefName, pre.prefCode, e.target.checked)}  />{pre.prefName}
          </div>
        </React.Fragment>
       
      );
    })
 
    }
    </div>
    
    
    </>
  )
};
