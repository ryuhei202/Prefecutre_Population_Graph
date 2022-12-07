// 都道府県を選択するコンポーネント

import { useEffect, useState } from "react";
import { fetchPrefectures } from "../../apis/prefectures";
import { Prefectures } from "../../types";
import { CheckBox } from "../atoms/CheckBox";

export const SelectArea = () => {

  const [ prefectures, setPrefectures ] = useState<Prefectures[]>();

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
      <CheckBox prefectures={prefectures} />
    </div>
    
    
    </>
  )
};
