import axios from "axios"
import { prefecturesIndex } from "../urls"

export const fetchPrefectures = () => {
  return axios.get(prefecturesIndex,{ headers: { 'X-API-KEY': process.env.REACT_APP_API_KEY } })
  .then(res => {
    const prefData= res.data.result
    return prefData;
  })
  .catch((e) => console.error(e))
}
