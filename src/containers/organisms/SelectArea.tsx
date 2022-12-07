// 都道府県を選択するコンポーネント

import { useEffect, useState } from "react";
import { fetchPrefectures } from "../../apis/prefectures";
import { Prefectures } from "../../types";

export const SelectArea = () => {

  const [ prefectures, setPrefectures ] = useState<Prefectures | null>(null);

useEffect(() => {
  fetchPrefectures()
  .then((data) => {
    setPrefectures(data);
  })
},[]);


  return (
    <>
    <p>都道府県</p>

    {/* checkbox */}
    
    </>
  )
};
