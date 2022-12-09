// 都道府県を選択するコンポーネント

import { useEffect, useState } from "react";
import { fetchPopulation } from "../../apis/population";
// import { fetchPopulation } from "../../apis/population";
import { fetchPrefectures } from "../../apis/prefectures";
import { Prefectures } from "../../types";
import { CheckBox } from "../molucules/CheckBox";
import { Graph } from "../molucules/Graph";

export const PrefecturesGraph = () => {

  const [ prefectures, setPrefectures ] = useState<Prefectures[]>();

  // const [checked, setChecked] = useState<boolean>(false);

  const [ selectedPrefecture, setSelectedPrefecture ] = useState<Array<number>>([]);


  const handleCheckboxChange = (e:any) => {
    // setChecked(!checked);
   
    // console.log(checked);
    // if (checked === false && !selectedPrefecture.includes(e.target.value)) {
    //   // checkboxが選択されたとき、配列にcheckboxのvalueを追加する
    //   console.log(checked);
      setSelectedPrefecture(     
        [...selectedPrefecture, e.target.value ]
      );
      getPopulation();
    // } else if(checked === true && selectedPrefecture.includes(e.target.value)){
    //   // checkboxが選択されていないとき、配列からcheckboxのvalueを削除する
    //   const newArray = [...selectedPrefecture];
    //   newArray.splice(e.target.value, 1);
    //   setSelectedPrefecture(newArray);
    //   // if (selectedPrefecture.includes(e.target.value)) {
       
    //   // }
    // }
  };


  console.log(selectedPrefecture);

  const getPopulation = () => {
    for(let i = 0; i < selectedPrefecture.length + 1; i++){
      fetchPopulation(selectedPrefecture[i]).then((data:any)=>{
        // console.log(data);
      })
    }    
  }

  useEffect(() => {
    fetchPrefectures()
    .then((data) => {
      setPrefectures(data);
    })
  },[]);



  return (
    <>
    <div className="select-area">
      <p>都道府県</p>
      <CheckBox prefectures={prefectures} onChange={handleCheckboxChange}  />
      <Graph />
      
    </div>       
    </>
  )
};
