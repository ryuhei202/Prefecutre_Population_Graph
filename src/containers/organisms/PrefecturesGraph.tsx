import { useEffect, useState } from "react";
import { fetchPopulation } from "../../apis/population";
import { fetchPrefectures } from "../../apis/prefectures";
import { PrefectureData, Prefectures } from "../../types";
import { CheckBox } from "../molucules/CheckBox";
import { Graph } from "../molucules/Graph";

export const PrefecturesGraph = () => {

  const [ prefectures, setPrefectures ] = useState<Prefectures[]>();
  const [ prefectureData, setPrefectureData ] = useState<PrefectureData[]>([]);


  //チェックボックスが選択された際のイベント
  const handleCheckboxChange = (name:string, value:number,checked:boolean, disabled:boolean) => {
    if(checked) {
       // checkboxが選択された時、配列にdataを追加する
       fetchPopulation(value)
      .then((res:any) => {
        let addPrefectureData = [...prefectureData];

        addPrefectureData.push({
          prefName: name,
          data: res.data.result.data[0].data
       });
      setPrefectureData(addPrefectureData);
    })
    } else {
      // checkboxが外されたとき、配列からdataを削除する
           let deletePrefectureData = [...prefectureData];
           const deleteElement = deletePrefectureData.findIndex((dpd) => dpd.prefName === name);

           deletePrefectureData.splice(deleteElement,1);

           setPrefectureData(deletePrefectureData);      
    }
    
   
  }

  
//都道府県データを取得
  useEffect(() => {
    fetchPrefectures()
    .then((data) => {
      setPrefectures(data);
    })
  },[]);



  return (
    <>
    <div className="select-area">
      <CheckBox prefectures={prefectures} onChange={handleCheckboxChange}  />
      <Graph  prefectureData={prefectureData} />
      
    </div>       
    </>
  )
};
