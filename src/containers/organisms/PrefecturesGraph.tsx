import { useEffect, useState } from "react";
import { fetchPopulation } from "../../apis/population";
import { fetchPrefectures } from "../../apis/prefectures";
import { PrefectureData, Prefectures } from "../../types";
import { CheckBox } from "../molucules/CheckBox";
import { Graph } from "../molucules/Graph";

export const PrefecturesGraph = () => {

  const [ prefectures, setPrefectures ] = useState<Prefectures[]>();
  const [ prefectureData, setPrefectureData ] = useState<PrefectureData[]>([]);
  const [ disabled, setDisabled ] = useState<boolean>(false);


  //チェックボックスが選択された際のイベント
  const handleCheckboxChange = (name:string, value:number,checked:boolean) => {
    if(checked) {
       // checkboxが選択された時、配列にdataを追加する
       setDisabled(true);

       fetchPopulation(value)
      .then((res:any) => {
        let addPrefectureData = [...prefectureData];

        addPrefectureData.push({
          prefName: name,
          data: res.data.result.data[0].data
       })
      setPrefectureData(addPrefectureData);
    }).finally(() => {
      setDisabled(false);
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

  console.log(prefectureData);



  return (
    <>
    <div className="select-area">
      <CheckBox prefectures={prefectures} onChange={handleCheckboxChange} disabled={disabled} />
      <Graph  prefectureData={prefectureData} />
      
    </div>       
    </>
  )
};
