// 都道府県を選択するコンポーネント

import { useEffect, useState } from "react";
import { fetchPrefectures } from "../../apis/prefectures";

export const SelectArea = () => {

  const [ prefectures, setPrefectures ] = useState();

useEffect(() => {
  fetchPrefectures()
  .then((data) => {
    console.log(data);
  })
},[]);

  return (
    <>
    <p>都道府県</p>

    {/* checkbox */}
    
    </>
  )
};
