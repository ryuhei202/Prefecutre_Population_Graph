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

  const [ selectedPrefecture, setSelectedPrefecture ] = useState<Array<number>>([]);

  //選択されたcheckboxのvalueを取得し、selectedPrefectureに格納
  const onClickAddPrefecture = (e:any) => {
    setSelectedPrefecture(     
      [...selectedPrefecture, e.target.value ]
    );
    getPopulation();
  }

  console.log(selectedPrefecture);

  const getPopulation = () => {
    for(let i = 0; i < selectedPrefecture.length + 1; i++){
      fetchPopulation(selectedPrefecture[i]).then((data:any)=>{
        console.log(data);
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
      <CheckBox prefectures={prefectures} onClickCheckbox={onClickAddPrefecture}  />
      <Graph />
      
    </div>       
    </>
  )
};
