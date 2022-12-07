import axios from "axios"
import { prefecturesIndex } from "../urls"

export const fetchPrefectures = () => {
  return axios.get(prefecturesIndex)
  .then(res => {
    console.log(res);
  })
  .catch((e) => console.error(e))
}
