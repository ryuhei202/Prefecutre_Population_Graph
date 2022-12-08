import axios from "axios"
import { prefecturePopuration } from "../urls";


export const fetchPopulation = (prefCode:number) => {
  return axios.get(prefecturePopuration(prefCode),{ headers: { 'X-API-KEY': '	2d7e9nRWrZGKkIikLRayeL7gKjiJZIsXbUDRb98Z' } })
  .then(res => {
    return res;
  })
  .catch((e) => console.error(e))
}
