import { createContext, useState } from "react";

export const SelectedPrefectureContext = createContext<any>({});

//選択された県をグローバルに管理する。
export const SelectedPrefectureProvider = (props:any) => {

  const [ selectedPrefecture, setSelectedPrefecture ] = useState<Array<number>>([]);

  return (
    <SelectedPrefectureContext.Provider value={{ selectedPrefecture, setSelectedPrefecture }}>
      {props.children}
    </SelectedPrefectureContext.Provider>
  )
}

