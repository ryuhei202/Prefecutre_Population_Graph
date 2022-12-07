import axios from "axios"
import { prefecturesIndex } from "../urls"

export const fetchPrefectures = () => {
  return axios.get(prefecturesIndex,{ headers: { 'X-API-KEY': '	2d7e9nRWrZGKkIikLRayeL7gKjiJZIsXbUDRb98Z' } })
  .then(res => {
    console.log(res);
    return res;
  })
  .catch((e) => console.error(e))
}
