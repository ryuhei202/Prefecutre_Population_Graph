import axios from "axios"
import { prefecturesIndex } from "../urls"

export const fetchPrefectures = () => {
  return axios.get(prefecturesIndex,{ headers: { 'X-API-KEY': '	2d7e9nRWrZGKkIikLRayeL7gKjiJZIsXbUDRb98Z' } })
  .then(res => {
    const prefData= res.data.result
    return prefData;
  })
  .catch((e) => console.error(e))
}
