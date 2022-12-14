import React from 'react';
import { Prefectures } from "../../types";

export type Props = {
  prefectures:Prefectures[] | undefined;
  onChange: (name:string, value:number,checked:boolean) => void;
  disabled:boolean;
}

export const CheckBox: React.FC<Props> = (props) => {

  const { prefectures, onChange, disabled } = props;


  return (
    <>
    <div className='container'>
      <h3>ι½ιεΊη</h3>
      <div className='checkbox-container'>   
     {
     prefectures?.map((pre:Prefectures)=>{
       return (
        
         <React.Fragment key={pre.prefCode} > 
            <div className='checkbox' >
              <label>
                <input id={`${pre.prefCode}`} type="checkbox" value={pre.prefCode} onChange={(e) => onChange(pre.prefName, pre.prefCode, e.target.checked)} disabled={disabled} />{pre.prefName}
              </label>
            </div>
          </React.Fragment>
        );
     })
    }
     </div>       
    </div>
    
    
    </>
  )
};
