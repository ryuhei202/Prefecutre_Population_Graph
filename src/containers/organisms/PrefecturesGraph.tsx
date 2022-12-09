// 都道府県を選択するコンポーネント
import { useEffect, useState } from "react";
import { BooleanLiteral } from "typescript";
import { fetchPopulation } from "../../apis/population";
import { fetchPrefectures } from "../../apis/prefectures";
import { Prefectures } from "../../types";
import { CheckBox } from "../molucules/CheckBox";
import { Graph } from "../molucules/Graph";

export const PrefecturesGraph = () => {

  const [ prefectures, setPrefectures ] = useState<Prefectures[]>();

  const [prefectureData, setPrefectureData] = useState<
  { data: { year: number; value: number }[] }[]
>([]);


  const handleCheckboxChange = (name:string, value:number,checked:boolean) => {
   
    console.log(checked);
    // if (checked === false && !selectedPrefecture.includes(e.target.value)) {
    //   // checkboxが選択されたとき、配列にcheckboxのvalueを追加する
    //   console.log(checked);
    if(checked) {
      getPopulationData(name, value);
    }
     
      
     
    // } else if(checked === true && selectedPrefecture.includes(e.target.value)){
    //   // checkboxが選択されていないとき、配列からcheckboxのvalueを削除する
    //   const newArray = [...selectedPrefecture];
    //   newArray.splice(e.target.value, 1);
    //   setSelectedPrefecture(newArray);
    //   // if (selectedPrefecture.includes(e.target.value)) {
       
    //   // }
    // }
  };
  const getPopulationData = (prefName:string, prefCode:number) => {
    fetchPopulation(prefCode)
    .then((data:any)=>{
      setPrefectureData(data.result.data[0].data)
    })
  }    

  console.log(prefectureData);

  

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
