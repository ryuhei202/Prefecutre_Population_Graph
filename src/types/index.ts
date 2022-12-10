export type Prefectures = {
  prefCode: number;
  prefName: string;
}

export type PrefectureData = { 
  prefName: string; 
  data: { year: number; value: number }[] 
}
