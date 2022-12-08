const DEFAULT_API_RESAS: string= 'https://opendata.resas-portal.go.jp/api/v1/';

export const prefecturesIndex = `${DEFAULT_API_RESAS}prefectures`;

export const prefecturePopuration = (prefCode:number) => `${DEFAULT_API_RESAS}population/composition/perYear?cityCode=-&prefCode=${prefCode}`;
// export const prefecturePopurationee = `${DEFAULT_API_RESAS}population/composition/perYear?cityCode=-&prefCode=1`;
