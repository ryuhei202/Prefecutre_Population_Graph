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

  const [ prefectureData, setPrefectureData ] = useState<
  { prefName: string; data: { year: number; value: number }[] }[]
>([]);




  const handleCheckboxChange = (name:string, value:number,checked:boolean) => {
    console.log(checked);
    if(checked) {
      fetchPopulation(value)
    .then((res:any) => {
      const newArray = [...prefectureData];
      newArray.push({
        prefName: name,
        data: res.data.result.data[0].data
      })
      setPrefectureData(newArray);
    })
      // getPopulationData(name, value);
    } else {
      // checkboxが外されたとき、配列からdataを削除する
          //  const deleteDatav = 
    }
   
  };

  const getPopulationData = (prefName:string, prefCode:number) => {
    
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
