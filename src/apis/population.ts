import axios from "axios"
import { prefecturePopuration } from "../urls";


export const fetchPopulation = (prefCode:number) => {
  return axios.get(prefecturePopuration(prefCode),{ headers: { 'X-API-KEY': process.env.REACT_APP_API_KEY  } })
  .then(res => {
    return res;
  })
  .catch((e) => console.error(e))
}
